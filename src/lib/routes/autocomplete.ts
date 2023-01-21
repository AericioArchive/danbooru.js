import type { GetRequestOptions } from "../danbooru";
import type { AutocompleteOptions } from "../types/autocomplete";
import { AutocompleteTypes } from "../types/autocomplete";

/**
 * @see {@link https://github.com/danbooru/danbooru/blob/master/app/logical/autocomplete_service.rb}
 */
export function autocomplete(query: string, options: Partial<AutocompleteOptions>): GetRequestOptions {
  const { type, ...rest } = options;

  return {
    route: "autocomplete",
    searchParams: {
      "search[query]": query,
      "search[type]": options.type ?? AutocompleteTypes.OPENSEARCH,
      ...rest,
    },
  };
}
