import type { PostsListOptions } from "../types/posts";
import type { GetRequestOptions } from "../types";

/**
 * @see {@link https://github.com/danbooru/danbooru/blob/master/app/models/post.rb}
 */
export const posts = {
  list(options?: Partial<PostsListOptions>): GetRequestOptions {
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

  count(tags: string): GetRequestOptions {
    return {
      route: "counts/posts",
      searchParams: {
        tags,
      },
    };
  },
};
