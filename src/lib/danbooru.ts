import got, { Got, RequestError, SearchParameters } from "got";
import { DanbooruEnv, type GetRequestOptions, RequestMethods } from "./types";
import type { OptionsOfJSONResponseBody } from "got/dist/source/types";
import type { DanbooruCache } from "./cache";

export class DanbooruJS {
  private _env: DanbooruEnv = { api_url: "https://danbooru.donmai.us/" };
  private _httpClient: Got = got;
  private _cache: DanbooruCache | undefined;

  constructor(cache?: DanbooruCache) {
    this._cache = cache;
  }

  public setApiUrl(api_url: string) {
    this._env.api_url = api_url;
    return this;
  }

  public setLogin(login: string, key: string) {
    this._env.auth = { login, key };
    return this;
  }

  public async get(options: GetRequestOptions) {
    return this.request(RequestMethods.GET, options.route, options.searchParams);
  }

  public async request(method: RequestMethods, route: string, searchParams?: SearchParameters) {
    const key = `${route}:${JSON.stringify(searchParams)}`;

    const options = {
      method,
      searchParams,
      headers: {
        "User-Agent": "danboorujs/1.0.0",
      },
    } as OptionsOfJSONResponseBody;

    if (this._env.auth) {
      options.username = this._env.auth.login;
      options.password = this._env.auth.key;
    }

    if (this._cache && (await this._cache.exists(key))) return this._cache.get(key);

    return this._httpClient(new URL(route + ".json", this._env.api_url), options)
      .then((res) => {
        const parsed = JSON.parse(<string>res.body);

        if (this._cache) this._cache.set(key, parsed);

        return parsed;
      })
      .catch((err: RequestError) => {
        if (err.code === "ERR_NON_2XX_3XX_RESPONSE") {
          // Show the error message returned by the API.
          throw new Error(err.code, {
            cause: {
              url: err.request?.requestUrl?.toJSON(),
              res: JSON.parse(<string>err.response?.body),
            },
          });
        }
        // Show the default error trace.
        throw err;
      });
  }
}
