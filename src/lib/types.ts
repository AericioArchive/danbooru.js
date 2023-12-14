export * from "./types/autocomplete";
export * from "./types/posts";
export * from "./types/related_tag";
export * from "./types/tags";

export type DanbooruEnv = {
  api_url: string;
  auth?: {
    login: string;
    key: string;
  };
};

export type SearchParameters = Record<string, string | number | boolean | null | undefined>;

export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type GetRequestOptions = {
  route: string;
  searchParams?: SearchParameters | undefined;
};

export enum DanbooruCategory {
  GENERAL = 0,
  ARTIST = 1,
  COPYRIGHT = 3,
  CHARACTER = 4,
  META = 5,
}
