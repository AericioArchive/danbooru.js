import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { DanbooruCategory, DanbooruJS } from "../src";
import { posts } from "../src/lib/routes/posts";
import { related_tag } from "../src/lib/routes/related_tag";
import { tags } from "../src/lib/routes/tags";

const __dirname = dirname(fileURLToPath(import.meta.url));

function dumpToJson(data, type) {
  fs.writeFile(path.join(__dirname, `dump-${type}.json`), JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log(`!! Saved results to dump-${type}.json`);
  });
}

const danbooru = new DanbooruJS();

async function makeRequest() {
  const data = await Promise.all([
    danbooru.get(posts.show(1)),
    danbooru.get(posts.list({ tags: "genshin_impact", limit: 1 })),
    danbooru.get(posts.counts("genshin_impact")),
    danbooru.get(related_tag("genshin_impact", { limit: 1, category: DanbooruCategory.GENERAL })),
    danbooru.get(tags.list({ name: "genshin_impact" })),
  ]);
  data.forEach((d, i) => dumpToJson(d, i));
}

makeRequest();
