import type { DanbooruCategory } from "../types";
import type { GetRequestOptions } from "../DanbooruJS";

export type TagsListOptions = {
  name_matches?: string;
  fuzzy_name_matches?: string;
  name?: string;
  category?: DanbooruCategory;
  hide_empty?: boolean;
  has_wiki?: boolean;
  has_artist?: boolean;
  order?: string;
};

export const tags = {
  list(options: TagsListOptions) {
    return {
      route: "tags",
      searchParams: {
        "search[name_matches]": options.name_matches,
        "search[fuzzy_name_matches]": options.fuzzy_name_matches,
        "search[name]": options.name,
        "search[category]": options.category,
        "search[hide_empty]": options.hide_empty,
        "search[has_wiki]": options.has_wiki,
        "search[has_artist]": options.has_artist,
        "search[order]": options.order,
      },
    } as GetRequestOptions;
  },
};
