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
import { FinalDayDto } from './finalDayDto';
import { CompetitionDto } from './competitionDto';


/**
 * SeasonDto
 */
export interface SeasonDto { 
    competitions?: Array<CompetitionDto>;
    state?: string;
    finalDay?: FinalDayDto;
    dates?: string;
    infosFinalDay?: string;
    infosPrepareSeason?: string;
    infosEinteilung?: string;
    name?: string;
    id?: number;
}

