/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'CredentialsApi'.
 * This API is part of the 'credentials_api_for_applications' service.
 */
export const CredentialsApi = {
  /**
   * Delete all credentials in the specified namespace.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteAllCredentials: () =>
    new OpenApiRequestBuilder<any>('delete', '/credentials/'),
  /**
   * Retreive key credential with the specified name in the specified namespace.
   * @param queryParameters - Object containing the following keys: name.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getKeyByName: (queryParameters: { name: string }) =>
    new OpenApiRequestBuilder<any>('get', '/credentials/key', {
      queryParameters
    }),
  /**
   * Create or update key credential with the specified name in the specified namespace.
   * @param body - Key to store. Note: The 'Example Value' and the 'Model' below shows how the content looks like before payload encryption. The real content client should send is a JSON Web Encryption (JWE) data in compact serialization format as specified in RFC 7516.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateKeyByName: (body: any) =>
    new OpenApiRequestBuilder<any | any>('post', '/credentials/key', {
      body
    }),
  /**
   * Delete key credential with the specified name in the specified namespace.
   * @param queryParameters - Object containing the following keys: name.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteKeyByName: (queryParameters: { name: string }) =>
    new OpenApiRequestBuilder<any>('delete', '/credentials/key', {
      queryParameters
    }),
  /**
   * List key credentials in the specified namespace.
   * @param queryParameters - Object containing the following keys: page, size, sort, attributes.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  listKeyNames: (queryParameters?: {
    page?: number;
    size?: number;
    sort?: string;
    attributes?: string;
  }) =>
    new OpenApiRequestBuilder<any>('get', '/credentials/keys', {
      queryParameters
    }),
  /**
   * Retrieve password credential with the specified name in the specified namespace.
   * @param queryParameters - Object containing the following keys: name.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getPasswordByName: (queryParameters: { name: string }) =>
    new OpenApiRequestBuilder<any>('get', '/credentials/password', {
      queryParameters
    }),
  /**
   * Create or update password credential with the specified name in the specified namespace.
   * @param body - Password to store. Note: The 'Example Value' and the 'Model' below shows how the content looks like before payload encryption. The real content client should send is a JSON Web Encryption (JWE) data in compact serialization format as specified in RFC 7516.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updatePasswordByName: (body: any) =>
    new OpenApiRequestBuilder<any | any>('post', '/credentials/password', {
      body
    }),
  /**
   * Delete password credential with the specified name in the specified namespace.
   * @param queryParameters - Object containing the following keys: name.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deletePasswordByName: (queryParameters: { name: string }) =>
    new OpenApiRequestBuilder<any>('delete', '/credentials/password', {
      queryParameters
    }),
  /**
   * List password credentials in the specified namespace.
   * @param queryParameters - Object containing the following keys: page, size, sort, attributes.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  listPasswordNames: (queryParameters?: {
    page?: number;
    size?: number;
    sort?: string;
    attributes?: string;
  }) =>
    new OpenApiRequestBuilder<any>('get', '/credentials/passwords', {
      queryParameters
    }),
  /**
   * Retrieve keyring credential with the specified name in the specified namespace.
   * @param queryParameters - Object containing the following keys: name.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getKeyringByName: (queryParameters: { name: string }) =>
    new OpenApiRequestBuilder<any>('get', '/credentials/keyring', {
      queryParameters
    }),
  /**
   * Create or update keyring credential with the specified name in the specified namespace.
   * @param body - Keyring to store. Note: The 'Example Value' and the 'Model' below shows how the content looks like before payload encryption. The real content client should send is a JSON Web Encryption (JWE) data in compact serialization format as specified in RFC 7516.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateKeyringByName: (body: any) =>
    new OpenApiRequestBuilder<any | any>('post', '/credentials/keyring', {
      body
    }),
  /**
   * Delete keyring credential with the specified name in the specified namespace.
   * @param queryParameters - Object containing the following keys: name.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteKeyringByName: (queryParameters: { name: string }) =>
    new OpenApiRequestBuilder<any>('delete', '/credentials/keyring', {
      queryParameters
    }),
  /**
   * List keying credentials in the specified namespace.
   * @param queryParameters - Object containing the following keys: page, size, sort, attributes.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  listKeyringNames: (queryParameters?: {
    page?: number;
    size?: number;
    sort?: string;
    attributes?: string;
  }) =>
    new OpenApiRequestBuilder<any>('get', '/credentials/keyrings', {
      queryParameters
    })
};
