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
import { UserDto } from './userDto';
import { NameDto } from './nameDto';


/**
 * TeamDto
 */
export interface TeamDto { 
    league?: NameDto;
    cup?: NameDto;
    homeBar?: NameDto;
    isFreeTicket?: boolean;
    isForfaitOut?: boolean;
    player1Id?: number;
    player2Id?: number;
    player1?: UserDto;
    player2?: UserDto;
    seasonAmbition?: string;
    group?: number;
    barId?: number;
    qualifiedForFinalDay?: string;
    qualifiedForFinalDayComment?: string;
    wishPlayDay?: string;
    name?: string;
    id?: number;
}

