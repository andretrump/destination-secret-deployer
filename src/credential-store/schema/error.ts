/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Error' schema.
 */
export type Error =
  | {
      /**
       * Machine readable error code
       * @example "example_error_code"
       */
      errorCode: string;
      /**
       * Human readable error message
       * @example "Example error explanation"
       */
      errorDescription: string;
      /**
       * Identifier of the error that can be used to track the problem
       * @example "d586a378-ceeb-445d-b7dc-a70b4d46f662"
       */
      trackingId: string;
    }
  | Record<string, any>;
