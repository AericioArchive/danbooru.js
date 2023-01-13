export type DanbooruEnv = {
  api_url: string;
  auth?: {
    login: string;
    key: string;
  };
};

export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum DanbooruCategory {
  GENERAL = 0,
  ARTIST = 1,
  COPYRIGHT = 3,
  CHARACTER = 4,
  META = 5,
}

// https://transform.tools/json-to-typescript
export type DanbooruPostData = {
  id: number;
  created_at: string;
  uploader_id: number;
  score: number;
  source: string;
  md5: string;
  last_comment_bumped_at: string;
  rating: string;
  image_width: number;
  image_height: number;
  tag_string: string;
  fav_count: number;
  file_ext: string;
  last_noted_at: any;
  parent_id: number;
  has_children: boolean;
  approver_id: any;
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
  updated_at: string;
  is_banned: boolean;
  pixiv_id: any;
  last_commented_at: string;
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
};
