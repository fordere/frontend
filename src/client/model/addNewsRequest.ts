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


/**
 * AddNewsRequest
 */
export interface AddNewsRequest { 
    userAuthId?: number;
    postDate?: Date;
    title?: string;
    content?: string;
    summary?: string;
    isPublished?: boolean;
    divisionId?: number;
}

