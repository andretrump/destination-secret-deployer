/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CredentialAdditionalData } from './credential-additional-data';
import type { CredentialName } from './credential-name';
import type { PasswordCredentialAttributes } from './password-credential-attributes';
import type { CredentialMetadata } from './credential-metadata';
/**
 * Representation of the 'SavedPassword' schema.
 */
export type SavedPassword =
  | (CredentialAdditionalData &
      CredentialName &
      PasswordCredentialAttributes &
      CredentialMetadata & {
        type?: 'password';
      })
  | Record<string, any>;
