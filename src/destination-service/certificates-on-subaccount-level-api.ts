/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  Certificate,
  NameOnly,
  Certificates,
  Attributes,
  Update,
  BulkResponse,
  BulkDelete,
  PublicKeys
} from './schema';
/**
 * Representation of the 'CertificatesOnSubaccountLevelApi'.
 * This API is part of the 'SAP_CP_CF_Connectivity_Destination' service.
 */
export const CertificatesOnSubaccountLevelApi = {
  /**
   * Get all certificates (as a JSON array) posted on subaccount level.
   * In none is found, an empty array is returned. Subaccount is determined by
   * the passed OAuth access token
   * ##### Remark&#58; The max limit of the length of "/&lt;path&gt;?&lt;query&gt;#&lt;fragment&gt;" is 4000 characters. For example:
   * `/destination-configuration/v1/subaccountCertificates?$filter=Name in ('certificate1.cer', 'certific%40te2.cer', 'cert%21f%21cate3.cer')`
   *
   * ##### For more information on URI structure follow [this link](https://tools.ietf.org/html/rfc3986#section-3)
   *
   * ### Note: For requests which return a large number of certificates, chunked handling of the response will be enabled. If an error occurs with the request processing while chunking is enabled, no response will be returned to the client.
   *
   * @param queryParameters - Object containing the following keys: $filter, $page, $pageSize, $pageCount, $entityCount, $select.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSubaccountCertificates: (queryParameters?: {
    $filter?: string;
    $page?: number;
    $pageSize?: number;
    $pageCount?: boolean;
    $entityCount?: boolean;
    $select?: string;
  }) =>
    new OpenApiRequestBuilder<Certificate | NameOnly[]>(
      'get',
      '/subaccountCertificates',
      {
        queryParameters
      }
    ),
  /**
   * Update a certificate (base64 encoded string, as a JSON object) or certificates (base64 encoded string, as a JSON array) or certificate attributes (certificate is generated by destination service) or certificate attributes with CSR (certificate is generated by destination service via externally provided CSR. The subject DN in the CSR is ignored. Only PEM certificate can be generated.) on subaccount level. Subaccount is determined by the passed OAuth access token
   * @param body - The certificate (base64 encoded string, as a JSON object) / Certificates (base64 encoded string, as a JSON array) / Certificate attributes / Certificate attributes with CSR (base64 encoded PEM)
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateSubaccountCertificates: (
    body: Certificate | Certificates | Attributes
  ) =>
    new OpenApiRequestBuilder<Update | BulkResponse[] | any>(
      'put',
      '/subaccountCertificates',
      {
        body
      }
    ),
  /**
   * Post a new certificate (base64 encoded string, as a JSON object) or new certificates (base64 encoded string, as a JSON array) or certificate attributes (certificate is generated by destination service) or certificate attributes with CSR (certificate is generated by destination service via externally provided CSR. The subject DN in the CSR is ignored. Only PEM certificate can be generated.) on subaccount level. Subaccount is determined by the passed OAuth access token
   * @param body - The certificate (base64 encoded string, as a JSON object) / Certificates (base64 encoded string, as a JSON array) / Certificate attributes / Certificate attributes with CSR (base64 encoded PEM)
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSubaccountCertificates: (
    body: Certificate | Certificates | Attributes
  ) =>
    new OpenApiRequestBuilder<any | any>('post', '/subaccountCertificates', {
      body
    }),
  /**
   * Delete certificates posted on subaccount level. Subaccount is
   * determined by the passed OAuth access token
   * ##### Remark&#58; The max limit of the length of "/&lt;path&gt;?&lt;query&gt;#&lt;fragment&gt;" is 4000 characters. For example:
   * `/destination-configuration/v1/subaccountCertificates?$filter=Name in ('certificate1.cer', 'certific%40te2.cer', 'cert%21f%21cate3.cer')`
   *
   * ##### For more information on URI structure follow [this link](https://tools.ietf.org/html/rfc3986#section-3)
   *
   * @param queryParameters - Object containing the following keys: $filter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteSubaccountCertificates: (queryParameters: { $filter: string }) =>
    new OpenApiRequestBuilder<BulkDelete>('delete', '/subaccountCertificates', {
      queryParameters
    }),
  /**
   * Get a certificate (base64 encoded string, as a JSON object) posted on subaccount level. Subaccount is determined by the passed OAuth access token
   * @param certificateName - subaccount id
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSubaccountCertificatesByCertificateName: (certificateName: string) =>
    new OpenApiRequestBuilder<Certificate>(
      'get',
      '/subaccountCertificates/{certificateName}',
      {
        pathParameters: { certificateName }
      }
    ),
  /**
   * Delete a certificate posted on subaccount level. Subaccount is determined by the passed OAuth access token
   * @param certificateName - Subaccount id
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteSubaccountCertificatesByCertificateName: (certificateName: string) =>
    new OpenApiRequestBuilder<Update>(
      'delete',
      '/subaccountCertificates/{certificateName}',
      {
        pathParameters: { certificateName }
      }
    ),
  /**
   * Get a certificate chain in PEM format (Base64 encoded string, as a JSON object) of a specified certificate. In case of a keystore, the response will contain certificate chain for each alias. The public part of password-protected keystores can be retrieved only for PEM certificates and certificates generated using attributes. Subaccount is determined by the passed OAuth access token.
   * @param certificateName - Certificate name on subaccount level
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSubaccountCertificatesPublicKeysByCertificateName: (
    certificateName: string
  ) =>
    new OpenApiRequestBuilder<PublicKeys>(
      'get',
      '/subaccountCertificates/{certificateName}/publicKeys',
      {
        pathParameters: { certificateName }
      }
    )
};
