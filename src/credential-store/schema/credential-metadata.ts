/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CredentialMetadata' schema.
 */
export type CredentialMetadata =
  | {
      /**
       * Optional attribute that can be used to store additional information about the credential. The value of the attribute is not processed by the service and is stored as is.
       * @example "{\"oauth_token_url\":\"https:\\system1.example.com\u000b1\token\",\"scope\":\"read\"}"
       * Max Length: 10000.
       */
      metadata?: string;
    }
  | Record<string, any>;
