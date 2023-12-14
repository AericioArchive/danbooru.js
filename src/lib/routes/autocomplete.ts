import type { AutocompleteOptions } from "../types/autocomplete.js";
import { AutocompleteTypes } from "../types/autocomplete.js";
import type { GetRequestOptions } from "../types.js";

/**
 * @see {@link https://github.com/danbooru/danbooru/blob/master/app/logical/autocomplete_service.rb}
 */
export function autocomplete(query: string, options: Partial<AutocompleteOptions>): GetRequestOptions {
  const { type, ...rest } = options;

  return {
    route: "autocomplete",
    searchParams: {
      "search[query]": query,
      "search[type]": type ?? AutocompleteTypes.OPENSEARCH,
      ...rest,
    },
  };
}
