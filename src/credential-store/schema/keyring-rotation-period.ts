/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'KeyringRotationPeriod' schema.
 */
export type KeyringRotationPeriod =
  | {
      /**
       * Attribute that represents the period during which the keyring rotation will be triggered automatically.
       * @example 365
       */
      period?: number;
      /**
       * Attribute that shows the last time when keyring was rotated.
       * @example "2022-01-16T05:30:48.634Z"
       * Format: "date-time".
       */
      lastRotateDate?: string;
    }
  | Record<string, any>;
