import type { DanbooruCategory } from "../types";

export type RelatedTagOptions = {
  limit: number;
  category: DanbooruCategory;
};

export interface RelatedTag {
  query: string;
  category: string;
  tags: TagCountArray[];
  tags_overlap: TagOverlapRecord;
  wiki_page_tags: TagCountArray[];
  other_wikis: TagOtherWikisRecord;
}

type TagCountArray = [tag: string, count: number];
type TagOverlapRecord = Record<string, number>;
type TagOtherWikisRecord = Record<string, TagCountArray[]>;
