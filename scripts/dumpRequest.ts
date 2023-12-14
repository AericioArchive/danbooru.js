import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { DanbooruCategory, DanbooruJS } from "../src/index.js";
import { posts } from "../src/lib/routes/posts.js";
import { related_tag } from "../src/lib/routes/related_tag.js";
import { tags } from "../src/lib/routes/tags.js";
import { DanbooruCache } from "../src/lib/cache.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

function dumpToJson(data: unknown, type: number) {
  fs.writeFile(path.join(__dirname, `dump-${type}.json`), JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log(`!! Saved results to dump-${type}.json`);
  });
}

const cache = new DanbooruCache("localhost", 6379);
const danbooru = new DanbooruJS(cache);

async function makeRequest() {
  const data = await Promise.all([
    danbooru.get(posts.show(1)),
    danbooru.get(posts.list({ tags: "genshin_impact", limit: 1 })),
    danbooru.get(posts.count("genshin_impact")),
    danbooru.get(related_tag("genshin_impact", { limit: 1, category: DanbooruCategory.GENERAL })),
    danbooru.get(tags.list({ name: "genshin_impact" })),
  ]);
  data.forEach((d: string) => console.log(d));
  // data.forEach((d, i) => dumpToJson(d, i));
}

makeRequest();
