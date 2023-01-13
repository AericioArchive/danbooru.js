import type { GetRequestOptions } from "../DanbooruJS";

export function posts() {
  function list(options = {}) {
    return {
      route: "posts",
      searchParams: options,
    } as GetRequestOptions;
  }

  function show(id: string, options = {}) {
    return {
      route: `posts/${id}`,
      searchParams: options,
    } as GetRequestOptions;
  }

  return { list, show };
}
