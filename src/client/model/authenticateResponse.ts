/**
 * Fordere WebService Console
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ResponseStatus } from './responseStatus';


/**
 * AuthenticateResponse
 */
export interface AuthenticateResponse { 
    userId?: string;
    sessionId?: string;
    userName?: string;
    displayName?: string;
    referrerUrl?: string;
    bearerToken?: string;
    refreshToken?: string;
    profileUrl?: string;
    roles?: Array<string>;
    permissions?: Array<string>;
    responseStatus?: ResponseStatus;
    /**
     * Dictionary<String,String>
     */
    meta?: { [key: string]: string; };
}

