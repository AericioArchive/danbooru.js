import type { GetRequestOptions } from "../danbooru";

/**
 * Autocomplete controller
 * @see {@link https://github.com/danbooru/danbooru/blob/master/app/logical/autocomplete_service.rb}
 */
export function autocomplete(query: string, options: AutocompleteOptions = {}): GetRequestOptions {
  const { type, ...rest } = options;

  return {
    route: "autocomplete",
    searchParams: {
      "search[query]": query,
      "search[type]": options.type,
      ...rest,
    },
  };
}

export type AutocompleteOptions = {
  limit?: number;
  type?: AutocompleteTypes;
};

export enum AutocompleteTypes {
  OPENSEARCH = "opensearch",
  TAG_QUERY = "tag_query",
  TAG = "tag",
  ARTIST = "artist",
  WIKI_PAGE = "wiki_page",
  USER = "user",
  MENTION = "mention",
  POOL = "pool",
  /** Requires Authentication */
  FAVORITE_GROUP = "favorite_group",
  /** Requires Authentication */
  SAVED_SEARCH_LABEL = "saved_search_label",
}
