import { related_tag } from "./routes/related_tag.js";
import { posts } from "./routes/posts.js";
import { tags } from "./routes/tags.js";
import { autocomplete } from "./routes/autocomplete.js";

export const Routes = {
  autocomplete,
  posts,
  related_tag,
  tags,
};
