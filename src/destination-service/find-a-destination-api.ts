/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { DestinationLookUpResult } from './schema';
/**
 * Representation of the 'FindADestinationApi'.
 * This API is part of the 'SAP_CP_CF_Connectivity_Destination' service.
 */
export const FindADestinationApi = {
  /**
   * Search priority is destination on service instance level. If none is found, fallbacks to subaccount level (accessible by all apps deployed in the same subaccount).
   * @param name - Destination name
   * @param queryParameters - Object containing the following keys: $skipCredentials, $skipTokenRetrieval.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getDestinationsByName: (
    name: string,
    queryParameters?: {
      $skipCredentials?: boolean;
      $skipTokenRetrieval?: boolean;
    }
  ) =>
    new OpenApiRequestBuilder<DestinationLookUpResult>(
      'get',
      '/destinations/{name}',
      {
        pathParameters: { name },
        queryParameters
      }
    )
};
