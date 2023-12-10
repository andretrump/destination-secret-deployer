/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  Destination,
  NameOnly,
  Destinations,
  Update,
  BulkResponse,
  BulkDelete
} from './schema';
/**
 * Representation of the 'DestinationsOnSubaccountLevelApi'.
 * This API is part of the 'SAP_CP_CF_Connectivity_Destination' service.
 */
export const DestinationsOnSubaccountLevelApi = {
  /**
   * Get a list of destinations (as a JSON array) posted on subaccount
   * level. If none is found, an empty array is returned. Subaccount is determined
   * by the passed OAuth access token.
   * ##### Remark&#58; The max limit of the length of "/&lt;path&gt;?&lt;query&gt;#&lt;fragment&gt;" is 4000 characters. For example:
   * `/destination-configuration/v1/subaccountDestinations?$filter=Name in ('destination1', 'destin%40tion2', 'dest%21nat%21on3')`
   *
   * ##### For more information on URI structure follow [this link](https://tools.ietf.org/html/rfc3986#section-3)
   *
   * ### Note: For requests which return a large number of destinations, chunked handling of the response will be enabled. If an error occurs with the request processing while chunking is enabled, no response will be returned to the client.
   *
   * @param queryParameters - Object containing the following keys: $filter, $page, $pageSize, $pageCount, $entityCount, $select.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSubaccountDestinations: (queryParameters?: {
    $filter?: string;
    $page?: number;
    $pageSize?: number;
    $pageCount?: boolean;
    $entityCount?: boolean;
    $select?: string;
  }) =>
    new OpenApiRequestBuilder<Destination | NameOnly[]>(
      'get',
      '/subaccountDestinations',
      {
        queryParameters
      }
    ),
  /**
   * Update (overwrite) an existing destination or destinations with a new destination (as a JSON object) or with new destinations (as a JSON array), posted on subaccount level. Subaccount is determined by the passed OAuth access token.
   * @param body - Destination properties (as a JSON object) / Destinations properties (as a JSON array)
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateSubaccountDestinations: (body: Destination | Destinations) =>
    new OpenApiRequestBuilder<Update | BulkResponse[] | any>(
      'put',
      '/subaccountDestinations',
      {
        body
      }
    ),
  /**
   * Post a new destination (as a JSON object) or destinations (as a JSON array) on subaccount level. Subaccount is determined by the passed OAuth access token.
   * @param body - Destination properties (as a JSON object) / Destinations properties (as a JSON array)
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSubaccountDestinations: (body: Destination | Destinations) =>
    new OpenApiRequestBuilder<any | any>('post', '/subaccountDestinations', {
      body
    }),
  /**
   * Delete destinations posted on subaccount level. Subaccount is
   * determined by the passed OAuth access token.
   * ##### Remark&#58; The max limit of the length of "/&lt;path&gt;?&lt;query&gt;#&lt;fragment&gt;" is 4000 characters. For example:
   * `/destination-configuration/v1/subaccountDestinations?$filter=Name in ('destination1', 'destin%40tion2', 'dest%21nat%21on3')`
   *
   * ##### For more information on URI structure follow [this link](https://tools.ietf.org/html/rfc3986#section-3)
   *
   * @param queryParameters - Object containing the following keys: $filter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteSubaccountDestinations: (queryParameters: { $filter: string }) =>
    new OpenApiRequestBuilder<BulkDelete>('delete', '/subaccountDestinations', {
      queryParameters
    }),
  /**
   * Get a destination (as a JSON object) posted on subaccount level. Subaccount is determined by the passed OAuth access token.
   * @param destinationName - Destination name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSubaccountDestinationsByDestinationName: (destinationName: string) =>
    new OpenApiRequestBuilder<Destination>(
      'get',
      '/subaccountDestinations/{destinationName}',
      {
        pathParameters: { destinationName }
      }
    ),
  /**
   * Delete a destination posted on subaccount level. Subaccount is determined by the passed OAuth access token.
   * @param destinationName - Destination name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteSubaccountDestinationsByDestinationName: (destinationName: string) =>
    new OpenApiRequestBuilder<Update>(
      'delete',
      '/subaccountDestinations/{destinationName}',
      {
        pathParameters: { destinationName }
      }
    )
};
