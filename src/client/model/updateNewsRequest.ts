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
import { NameDto } from './nameDto';


/**
 * UpdateNewsRequest
 */
export interface UpdateNewsRequest { 
    id?: number;
    user?: NameDto;
    postDate?: Date;
    title?: string;
    content?: string;
    isPublished?: boolean;
}

