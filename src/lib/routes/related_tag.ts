import type { DanbooruCategory } from "../types";
import type { GetRequestOptions } from "../DanbooruJS";

export type RelatedTagOptions = {
  limit?: number;
  category?: DanbooruCategory;
};

export function related_tag(query: string, options: RelatedTagOptions = {}) {
  return {
    route: "related_tag",
    searchParams: {
      query,
      ...options,
    },
  } as GetRequestOptions;
}
