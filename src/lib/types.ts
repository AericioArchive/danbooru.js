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

export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum DanbooruCategory {
  GENERAL = 0,
  ARTIST = 1,
  COPYRIGHT = 3,
  CHARACTER = 4,
  META = 5,
}
