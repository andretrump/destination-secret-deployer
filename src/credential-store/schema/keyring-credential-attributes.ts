/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { KeyringRotationPeriod } from './keyring-rotation-period';
/**
 * Representation of the 'KeyringCredentialAttributes' schema.
 */
export type KeyringCredentialAttributes =
  | {
      /**
       * An optional attribute that indicates if the value of the keyring is exportable or not. This attribute can be set during the creation of the credential but if set to 'true' (meaning exportable keyring value) - it can no longer be updated to 'false' (non-exportable). Update of exportable from 'false' to 'true' is allowed though. If the attribute is not set, the default value used is 'false' and thus when retrieving the keyring - the value will not be returned .
       * @example true
       */
      exportable?: boolean;
      /**
       * Optional keyring length in bytes. If not specified the default value of '32' will be used.
       * @example 32
       * Max Length: 128.
       * Min Length: 16.
       */
      length?: number;
      rotation?: KeyringRotationPeriod;
      /**
       * Attribute that shows the identifier of the active version of the keyring.
       */
      activeVersionId?: number;
    }
  | Record<string, any>;
