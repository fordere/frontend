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
import { SffPlayerDto } from './sffPlayerDto';


/**
 * TournamentRegistrationReisliRequest
 */
export interface TournamentRegistrationReisliRequest { 
    tournament?: string;
    comment?: string;
    teamName?: string;
    total?: number;
    player1?: SffPlayerDto;
    player2?: SffPlayerDto;
    player3?: SffPlayerDto;
    player4?: SffPlayerDto;
}

