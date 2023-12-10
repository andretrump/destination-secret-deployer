/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CredentialAdditionalData } from './credential-additional-data';
import type { CredentialName } from './credential-name';
import type { CredentialMetadata } from './credential-metadata';
import type { KeyringCredentialAttributes } from './keyring-credential-attributes';
/**
 * Representation of the 'SavedKeyring' schema.
 */
export type SavedKeyring =
  | (CredentialAdditionalData &
      CredentialName &
      CredentialMetadata &
      KeyringCredentialAttributes & {
        type?: 'keyring';
      })
  | Record<string, any>;
