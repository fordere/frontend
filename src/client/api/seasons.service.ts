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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { CompetitionDto } from '../model/competitionDto';
import { LeagueDto } from '../model/leagueDto';
import { SaveSeasonRequest } from '../model/saveSeasonRequest';
import { SeasonDto } from '../model/seasonDto';
import { TeamDto } from '../model/teamDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

    protected basePath = 'https://localhost:5001';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Get all seasons.
     * Get all seasons.
     * @param accept Accept Header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllArchivedSeasons(accept: 'application/json', observe?: 'body', reportProgress?: boolean): Observable<Array<SeasonDto>>;
    public getAllArchivedSeasons(accept: 'application/json', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SeasonDto>>>;
    public getAllArchivedSeasons(accept: 'application/json', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SeasonDto>>>;
    public getAllArchivedSeasons(accept: 'application/json', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getAllArchivedSeasons.');
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<SeasonDto>>(`${this.configuration.basePath}/seasons/archived`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all seasons.
     * Get all seasons.
     * @param accept Accept Header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllSeasons(accept: 'application/json', observe?: 'body', reportProgress?: boolean): Observable<Array<SeasonDto>>;
    public getAllSeasons(accept: 'application/json', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SeasonDto>>>;
    public getAllSeasons(accept: 'application/json', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SeasonDto>>>;
    public getAllSeasons(accept: 'application/json', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getAllSeasons.');
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<SeasonDto>>(`${this.configuration.basePath}/seasons`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all teams in a season
     * Get all teams in a season
     * @param accept Accept Header
     * @param seasonId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTeamsInSeason(accept: 'application/json', seasonId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<TeamDto>>;
    public getAllTeamsInSeason(accept: 'application/json', seasonId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TeamDto>>>;
    public getAllTeamsInSeason(accept: 'application/json', seasonId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TeamDto>>>;
    public getAllTeamsInSeason(accept: 'application/json', seasonId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getAllTeamsInSeason.');
        }
        if (seasonId === null || seasonId === undefined) {
            throw new Error('Required parameter seasonId was null or undefined when calling getAllTeamsInSeason.');
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<TeamDto>>(`${this.configuration.basePath}/seasons/${encodeURIComponent(String(seasonId))}/teams`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the current running season
     * Gets the current running season
     * @param accept Accept Header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCurrentSeason(accept: 'application/json', observe?: 'body', reportProgress?: boolean): Observable<SeasonDto>;
    public getCurrentSeason(accept: 'application/json', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SeasonDto>>;
    public getCurrentSeason(accept: 'application/json', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SeasonDto>>;
    public getCurrentSeason(accept: 'application/json', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getCurrentSeason.');
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<SeasonDto>(`${this.configuration.basePath}/seasons/current`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get leagues by season
     * Get leagues by season
     * @param accept Accept Header
     * @param seasonId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLeaguesBySeason(accept: 'application/json', seasonId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<LeagueDto>>;
    public getLeaguesBySeason(accept: 'application/json', seasonId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<LeagueDto>>>;
    public getLeaguesBySeason(accept: 'application/json', seasonId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<LeagueDto>>>;
    public getLeaguesBySeason(accept: 'application/json', seasonId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getLeaguesBySeason.');
        }
        if (seasonId === null || seasonId === undefined) {
            throw new Error('Required parameter seasonId was null or undefined when calling getLeaguesBySeason.');
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<LeagueDto>>(`${this.configuration.basePath}/seasons/${encodeURIComponent(String(seasonId))}/leagues`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the current running season
     * Gets the current running season
     * @param accept Accept Header
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSeasonById(accept: 'application/json', id: number, observe?: 'body', reportProgress?: boolean): Observable<SeasonDto>;
    public getSeasonById(accept: 'application/json', id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SeasonDto>>;
    public getSeasonById(accept: 'application/json', id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SeasonDto>>;
    public getSeasonById(accept: 'application/json', id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getSeasonById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSeasonById.');
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<SeasonDto>(`${this.configuration.basePath}/seasons/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all ranking tables of a season.
     * Get all ranking tables of a season.
     * @param accept Accept Header
     * @param seasonId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStandingsFromSeason(accept: 'application/json', seasonId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<CompetitionDto>>;
    public getStandingsFromSeason(accept: 'application/json', seasonId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CompetitionDto>>>;
    public getStandingsFromSeason(accept: 'application/json', seasonId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CompetitionDto>>>;
    public getStandingsFromSeason(accept: 'application/json', seasonId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getStandingsFromSeason.');
        }
        if (seasonId === null || seasonId === undefined) {
            throw new Error('Required parameter seasonId was null or undefined when calling getStandingsFromSeason.');
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<CompetitionDto>>(`${this.configuration.basePath}/seasons/${encodeURIComponent(String(seasonId))}/standings`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Save a season
     * Save a season
     * @param accept Accept Header
     * @param id 
     * @param name 
     * @param state 
     * @param dates 
     * @param infosFinalDay 
     * @param infosPrepareSeason 
     * @param infosEinteilung 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveSeason(accept: 'application/json', id: number, name?: string, state?: string, dates?: string, infosFinalDay?: string, infosPrepareSeason?: string, infosEinteilung?: string, body?: SaveSeasonRequest, observe?: 'body', reportProgress?: boolean): Observable<SeasonDto>;
    public saveSeason(accept: 'application/json', id: number, name?: string, state?: string, dates?: string, infosFinalDay?: string, infosPrepareSeason?: string, infosEinteilung?: string, body?: SaveSeasonRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SeasonDto>>;
    public saveSeason(accept: 'application/json', id: number, name?: string, state?: string, dates?: string, infosFinalDay?: string, infosPrepareSeason?: string, infosEinteilung?: string, body?: SaveSeasonRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SeasonDto>>;
    public saveSeason(accept: 'application/json', id: number, name?: string, state?: string, dates?: string, infosFinalDay?: string, infosPrepareSeason?: string, infosEinteilung?: string, body?: SaveSeasonRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling saveSeason.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveSeason.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('Name', <any>name);
        }
        if (state !== undefined && state !== null) {
            queryParameters = queryParameters.set('State', <any>state);
        }
        if (dates !== undefined && dates !== null) {
            queryParameters = queryParameters.set('Dates', <any>dates);
        }
        if (infosFinalDay !== undefined && infosFinalDay !== null) {
            queryParameters = queryParameters.set('InfosFinalDay', <any>infosFinalDay);
        }
        if (infosPrepareSeason !== undefined && infosPrepareSeason !== null) {
            queryParameters = queryParameters.set('InfosPrepareSeason', <any>infosPrepareSeason);
        }
        if (infosEinteilung !== undefined && infosEinteilung !== null) {
            queryParameters = queryParameters.set('InfosEinteilung', <any>infosEinteilung);
        }

        let headers = this.defaultHeaders;
        if (accept !== undefined && accept !== null) {
            headers = headers.set('Accept', String(accept));
        }

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<SeasonDto>(`${this.configuration.basePath}/seasons/${encodeURIComponent(String(id))}`,
            body,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
