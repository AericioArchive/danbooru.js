import type { GetRequestOptions, TagsListOptions } from "../types.js";

/**
 * @see {@link https://github.com/danbooru/danbooru/blob/master/app/models/tag.rb}
 */
export const tags = {
  list(options?: Partial<TagsListOptions>): GetRequestOptions {
    return {
      route: "tags",
      searchParams: {
        "search[name_matches]": options?.name_matches,
        "search[fuzzy_name_matches]": options?.fuzzy_name_matches,
        "search[name]": options?.name,
        "search[category]": options?.category,
        "search[hide_empty]": options?.hide_empty,
        "search[has_wiki]": options?.has_wiki,
        "search[has_artist]": options?.has_artist,
        "search[order]": options?.order,
      },
    };
  },
};
