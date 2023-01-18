import type { GetRequestOptions } from "../danbooru";
import type { PostsListOptions } from "../types/posts";

export const posts = {
  list(options: PostsListOptions = {}): GetRequestOptions {
    return {
      route: "posts",
      searchParams: options,
    };
  },

  show(id: number): GetRequestOptions {
    return {
      route: `posts/${id}`,
    };
  },

  counts(tags: string): GetRequestOptions {
    return {
      route: "counts/posts",
      searchParams: {
        tags,
      },
    };
  },
};
