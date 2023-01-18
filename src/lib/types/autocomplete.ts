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

export interface AutocompleteSearch {
  type: string;
  label: string;
  value: string;
}

export type AutocompleteOpenSearch = [query: string, results: [tag: string]];
export type AutocompleteTagSearch = AutocompleteSearch & { category: number; post_count: number };
export type AutocompleteArtistSearch = AutocompleteSearch & { category: number };
export type AutocompleteTagQuerySearch = AutocompleteTagSearch & { antecedent: string };
export type AutocompleteWikiPageSearch = AutocompleteTagSearch;
export type AutocompleteUserSearch = AutocompleteSearch & { id: number; level: string };
export type AutocompleteMentionSearch = AutocompleteUserSearch;
export type AutocompletePoolSearch = AutocompleteSearch & { category: string; post_count: number; id: number };
export type AutocompleteFavoriteGroupSearch = Omit<AutocompleteSearch, "type"> & { post_count: number };
export type AutocompleteSavedSearchLabelSearch = Omit<AutocompleteSearch, "type">;
