/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'KeyCredentialAttributes' schema.
 */
export type KeyCredentialAttributes =
  | {
      /**
       * Optional attribute that can be used to store information about the format of the credential value. The value of the attribute is not processed by the service and is stored as is.
       * @example "AES-256"
       * Max Length: 255.
       */
      format?: string;
      /**
       * @example "jsmith"
       * Max Length: 1024.
       */
      username?: string;
    }
  | Record<string, any>;
