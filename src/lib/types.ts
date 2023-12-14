import type { SearchParameters } from "got";

export * from "./types/autocomplete.js";
export * from "./types/posts.js";
export * from "./types/related_tag.js";
export * from "./types/tags.js";

export type DanbooruEnv = {
  api_url: string;
  auth?: {
    login: string;
    key: string;
  };
};

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
