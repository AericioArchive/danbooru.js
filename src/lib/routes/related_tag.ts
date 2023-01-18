import type { RelatedTagOptions } from "../types";
import type { GetRequestOptions } from "../danbooru";

export function related_tag(query: string, options: RelatedTagOptions = {}): GetRequestOptions {
  return {
    route: "related_tag",
    searchParams: {
      query,
      ...options,
    },
  };
}
