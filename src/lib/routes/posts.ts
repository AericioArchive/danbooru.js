import type { GetRequestOptions } from "../danbooru";

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

export type PostsListOptions = {
  limit?: number;
  page?: number;
  tags?: string;
  md5?: string;
  random?: boolean;
  raw?: boolean;
};
