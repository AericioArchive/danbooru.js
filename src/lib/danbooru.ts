import { DanbooruEnv, RequestMethods, SearchParameters } from "./types";
import { Client, Dispatcher } from "undici";
import type { IncomingHttpHeaders } from "undici/types/header";

export type GetRequestOptions = {
  route: string;
  searchParams?: SearchParameters | undefined;
};

export class DanbooruJS {
  private _env: DanbooruEnv = { url: "https://danbooru.donmai.us" };
  private _httpClient: Client = new Client(this._env.url);

  private _headers: IncomingHttpHeaders = { "User-Agent": "danboorujs/1.0.0" };

  get httpClient(): Client {
    return this._httpClient;
  }

  public login(username: string, key: string) {
    this._env.auth = Buffer.from(`${username}:${key}`).toString("base64");
    this._headers = { ...this._headers, Authorization: `Basic ${this._env.auth}` };
    return this;
  }

  public async get(options: GetRequestOptions) {
    return this.request(RequestMethods.GET, options.route, options.searchParams);
  }

  public async request(method: RequestMethods, route: string, searchParams?: SearchParameters) {
    const options = {
      method,
      path: `/${route}.json`,
      query: searchParams,
      headers: this._headers,
      maxRedirections: 5,
    } as Dispatcher.RequestOptions;

    const { statusCode, headers, body } = await this.httpClient.request(options);

    if (statusCode !== 200) {
      let message = "unexpected status code";
      const cause = {
        statusCode,
        options,
      } as Record<string, unknown>;

      if (headers["cf-mitigated"]) message = "cloudflare challenge encountered";
      else cause["body"] = await body.json();

      throw new Error(message, { cause });
    }

    return (await body.json()) as Record<string, any>;
  }
}
