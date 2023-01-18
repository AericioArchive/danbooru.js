import type { GetRequestOptions } from "../danbooru";
import type { AutocompleteOptions } from "../types/autocomplete";

/**
 * Autocomplete controller
 * @see {@link https://github.com/danbooru/danbooru/blob/master/app/logical/autocomplete_service.rb}
 */
export function autocomplete(query: string, options: AutocompleteOptions = {}): GetRequestOptions {
  const { type, ...rest } = options;

  return {
    route: "autocomplete",
    searchParams: {
      "search[query]": query,
      "search[type]": options.type,
      ...rest,
    },
  };
}
