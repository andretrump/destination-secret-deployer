/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CredentialAdditionalData' schema.
 */
export type CredentialAdditionalData =
  | {
      /**
       * Unique identifier of the credential. It is changed every time the credential is changed. Used also as Entity Tag (ETag) value.
       * @example "1a9e9dd1-b381-4e83-857e-f01862384063"
       */
      id: string;
      /**
       * Format: "date-time".
       */
      modifiedAt: string;
      type: string;
    }
  | Record<string, any>;
