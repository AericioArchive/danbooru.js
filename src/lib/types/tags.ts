export interface Tags {
  id: number;
  name: string;
  post_count: number;
  category: number;
  created_at: Date;
  updated_at: Date;
  is_deprecated: boolean;
  words: string[];
}
