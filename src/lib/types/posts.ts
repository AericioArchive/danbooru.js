export type PostsListOptions = {
  limit: number;
  page: number;
  tags: string;
  md5: string;
  random: boolean;
  raw: boolean;
  rating: Rating;
};

export enum Rating {
  GENERAL = "g",
  SENSITIVE = "s",
  QUESTIONABLE = "q",
  EXPLICIT = "e",
}

export interface Post {
  id: number;
  created_at: Date;
  uploader_id: number;
  score: number;
  source: string;
  md5: string;
  last_comment_bumped_at: Date | null;
  rating: Rating;
  image_width: number;
  image_height: number;
  tag_string: string;
  fav_count: number;
  file_ext: string;
  last_noted_at: Date | null;
  parent_id: number;
  has_children: boolean;
  approver_id: string | null;
  tag_count_general: number;
  tag_count_artist: number;
  tag_count_character: number;
  tag_count_copyright: number;
  file_size: number;
  up_score: number;
  down_score: number;
  is_pending: boolean;
  is_flagged: boolean;
  is_deleted: boolean;
  tag_count: number;
  updated_at: Date;
  is_banned: boolean;
  pixiv_id: string | null;
  last_commented_at: Date | null;
  has_active_children: boolean;
  bit_flags: number;
  tag_count_meta: number;
  has_large: boolean;
  has_visible_children: boolean;
  tag_string_general: string;
  tag_string_character: string;
  tag_string_copyright: string;
  tag_string_artist: string;
  tag_string_meta: string;
  file_url: string;
  large_file_url: string;
  preview_file_url: string;
}

export interface PostCount {
  posts: number;
}
