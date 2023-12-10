/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'PagingAttributes' schema.
 */
export type PagingAttributes =
  | {
      /**
       * Indicates whether this page is first
       * @example true
       */
      first?: boolean;
      /**
       * Indicates whether this page is last
       */
      last?: boolean;
      /**
       * Number of the page
       */
      number?: number;
      /**
       * Number of the elements in the current page
       * @example 2
       */
      numberOfElements?: number;
      /**
       * Size of the page
       * @example 2
       */
      size?: number;
      sort?:
        | {
            sorted?: boolean;
            unsorted?: boolean;
          }
        | Record<string, any>;
      /**
       * Total number of elements
       * @example 50
       */
      totalElements?: number;
      /**
       * Total number of pages
       * @example 25
       */
      totalPages?: number;
    }
  | Record<string, any>;
