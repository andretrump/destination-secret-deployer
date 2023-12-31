/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'KeyCredentialValue' schema.
 */
export type KeyCredentialValue =
  | {
      /**
       * Base64 encoded binary value of the key
       * @example "GIjzkpX14qTXEFOhZh4+dBoHXppBIFh4alrZz/7wzDo="
       * Format: "base64".
       * Max Length: 32768.
       * Min Length: 1.
       */
      value: string;
    }
  | Record<string, any>;
