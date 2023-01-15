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
