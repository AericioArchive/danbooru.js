import type { DanbooruCategory } from "../types.js";

export type TagsListOptions = {
  name_matches: string;
  fuzzy_name_matches: string;
  name: string;
  category: DanbooruCategory;
  hide_empty: boolean;
  has_wiki: boolean;
  has_artist: boolean;
  order: string;
};

export interface Tag {
  id: number;
  name: string;
  post_count: number;
  category: number;
  created_at: Date;
  updated_at: Date;
  is_deprecated: boolean;
  words: string[];
}
