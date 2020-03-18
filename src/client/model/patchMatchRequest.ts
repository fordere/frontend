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
 * PatchMatchRequest
 */
export interface PatchMatchRequest { 
    id?: number;
    homeTeamId?: number;
    guestTeamId?: number;
    finalDayCompetitionId?: number;
    tableId?: number;
    playDate?: Date;
    registerDate?: Date;
    resultDate?: Date;
    leagueId?: number;
    cupId?: number;
    cupRound?: number;
    isWinnerBracketGame?: boolean;
    roundOrder?: number;
    isNotPlayedMatch?: boolean;
}

