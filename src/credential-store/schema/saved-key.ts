/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CredentialAdditionalData } from './credential-additional-data';
import type { CredentialName } from './credential-name';
import type { KeyCredentialAttributes } from './key-credential-attributes';
import type { CredentialMetadata } from './credential-metadata';
/**
 * Representation of the 'SavedKey' schema.
 */
export type SavedKey =
  | (CredentialAdditionalData &
      CredentialName &
      KeyCredentialAttributes &
      CredentialMetadata & {
        type?: 'key';
      })
  | Record<string, any>;
