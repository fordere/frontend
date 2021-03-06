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

import { AddTableAvailabilityRequest } from '../model/addTableAvailabilityRequest';
import { CreateTableRequest } from '../model/createTableRequest';
import { TableAvailabilityDto } from '../model/tableAvailabilityDto';
import { TableDto } from '../model/tableDto';
import { UpdateTableRequest } from '../model/updateTableRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class TablesService {

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
     * Get all tables available in a bar
     * Get all tables available in a bar
     * @param accept Accept Header
     * @param tableId 
     * @param firstTimeSlotDayOfWeek 
     * @param firstTimeSlot 
     * @param lastTimeSlotDayOfWeek 
     * @param lastTimeSlot 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addTableAvailability(accept: 'application/json', tableId: number, firstTimeSlotDayOfWeek?: number, firstTimeSlot?: Date, lastTimeSlotDayOfWeek?: number, lastTimeSlot?: Date, body?: AddTableAvailabilityRequest, observe?: 'body', reportProgress?: boolean): Observable<TableAvailabilityDto>;
    public addTableAvailability(accept: 'application/json', tableId: number, firstTimeSlotDayOfWeek?: number, firstTimeSlot?: Date, lastTimeSlotDayOfWeek?: number, lastTimeSlot?: Date, body?: AddTableAvailabilityRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TableAvailabilityDto>>;
    public addTableAvailability(accept: 'application/json', tableId: number, firstTimeSlotDayOfWeek?: number, firstTimeSlot?: Date, lastTimeSlotDayOfWeek?: number, lastTimeSlot?: Date, body?: AddTableAvailabilityRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TableAvailabilityDto>>;
    public addTableAvailability(accept: 'application/json', tableId: number, firstTimeSlotDayOfWeek?: number, firstTimeSlot?: Date, lastTimeSlotDayOfWeek?: number, lastTimeSlot?: Date, body?: AddTableAvailabilityRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling addTableAvailability.');
        }
        if (tableId === null || tableId === undefined) {
            throw new Error('Required parameter tableId was null or undefined when calling addTableAvailability.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (firstTimeSlotDayOfWeek !== undefined && firstTimeSlotDayOfWeek !== null) {
            queryParameters = queryParameters.set('FirstTimeSlotDayOfWeek', <any>firstTimeSlotDayOfWeek);
        }
        if (firstTimeSlot !== undefined && firstTimeSlot !== null) {
            queryParameters = queryParameters.set('FirstTimeSlot', <any>firstTimeSlot.toISOString());
        }
        if (lastTimeSlotDayOfWeek !== undefined && lastTimeSlotDayOfWeek !== null) {
            queryParameters = queryParameters.set('LastTimeSlotDayOfWeek', <any>lastTimeSlotDayOfWeek);
        }
        if (lastTimeSlot !== undefined && lastTimeSlot !== null) {
            queryParameters = queryParameters.set('LastTimeSlot', <any>lastTimeSlot.toISOString());
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

        return this.httpClient.put<TableAvailabilityDto>(`${this.configuration.basePath}/tables/${encodeURIComponent(String(tableId))}/availabilities`,
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

    /**
     * Create a single table
     * Create a single table
     * @param accept Accept Header
     * @param id 
     * @param name 
     * @param barId 
     * @param tableType 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createTable(accept: 'application/json', id: number, name?: string, barId?: number, tableType?: string, body?: CreateTableRequest, observe?: 'body', reportProgress?: boolean): Observable<TableDto>;
    public createTable(accept: 'application/json', id: number, name?: string, barId?: number, tableType?: string, body?: CreateTableRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TableDto>>;
    public createTable(accept: 'application/json', id: number, name?: string, barId?: number, tableType?: string, body?: CreateTableRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TableDto>>;
    public createTable(accept: 'application/json', id: number, name?: string, barId?: number, tableType?: string, body?: CreateTableRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling createTable.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createTable.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('Name', <any>name);
        }
        if (barId !== undefined && barId !== null) {
            queryParameters = queryParameters.set('BarId', <any>barId);
        }
        if (tableType !== undefined && tableType !== null) {
            queryParameters = queryParameters.set('TableType', <any>tableType);
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

        return this.httpClient.post<TableDto>(`${this.configuration.basePath}/tables/${encodeURIComponent(String(id))}`,
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

    /**
     * Get all tables available in a bar
     * Get all tables available in a bar
     * @param accept Accept Header
     * @param tableId 
     * @param tableAvailabilityId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteTableAvailability(accept: 'application/json', tableId: number, tableAvailabilityId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteTableAvailability(accept: 'application/json', tableId: number, tableAvailabilityId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteTableAvailability(accept: 'application/json', tableId: number, tableAvailabilityId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteTableAvailability(accept: 'application/json', tableId: number, tableAvailabilityId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling deleteTableAvailability.');
        }
        if (tableId === null || tableId === undefined) {
            throw new Error('Required parameter tableId was null or undefined when calling deleteTableAvailability.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (tableAvailabilityId !== undefined && tableAvailabilityId !== null) {
            queryParameters = queryParameters.set('TableAvailabilityId', <any>tableAvailabilityId);
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
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.delete<any>(`${this.configuration.basePath}/tables/${encodeURIComponent(String(tableId))}/availabilities`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all tables available in a bar
     * Get all tables available in a bar
     * @param accept Accept Header
     * @param tableId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTableAvailabilities(accept: 'application/json', tableId: number, observe?: 'body', reportProgress?: boolean): Observable<TableAvailabilityDto>;
    public getAllTableAvailabilities(accept: 'application/json', tableId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TableAvailabilityDto>>;
    public getAllTableAvailabilities(accept: 'application/json', tableId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TableAvailabilityDto>>;
    public getAllTableAvailabilities(accept: 'application/json', tableId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getAllTableAvailabilities.');
        }
        if (tableId === null || tableId === undefined) {
            throw new Error('Required parameter tableId was null or undefined when calling getAllTableAvailabilities.');
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


        return this.httpClient.get<TableAvailabilityDto>(`${this.configuration.basePath}/tables/${encodeURIComponent(String(tableId))}/availabilities`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets all available tables
     * Gets all available tables
     * @param accept Accept Header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTables(accept: 'application/json', observe?: 'body', reportProgress?: boolean): Observable<TableDto>;
    public getAllTables(accept: 'application/json', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TableDto>>;
    public getAllTables(accept: 'application/json', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TableDto>>;
    public getAllTables(accept: 'application/json', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getAllTables.');
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


        return this.httpClient.get<TableDto>(`${this.configuration.basePath}/tables`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a single table
     * Gets a single table
     * @param accept Accept Header
     * @param tableId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTableById(accept: 'application/json', tableId: number, observe?: 'body', reportProgress?: boolean): Observable<TableDto>;
    public getTableById(accept: 'application/json', tableId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TableDto>>;
    public getTableById(accept: 'application/json', tableId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TableDto>>;
    public getTableById(accept: 'application/json', tableId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getTableById.');
        }
        if (tableId === null || tableId === undefined) {
            throw new Error('Required parameter tableId was null or undefined when calling getTableById.');
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


        return this.httpClient.get<TableDto>(`${this.configuration.basePath}/tables/${encodeURIComponent(String(tableId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get timeslots for a specific day.
     * Get timeslots for a specific day.
     * @param accept Accept Header
     * @param tableId 
     * @param day 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public timeSlot(accept: 'application/json', tableId: number, day: Date, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public timeSlot(accept: 'application/json', tableId: number, day: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public timeSlot(accept: 'application/json', tableId: number, day: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public timeSlot(accept: 'application/json', tableId: number, day: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling timeSlot.');
        }
        if (tableId === null || tableId === undefined) {
            throw new Error('Required parameter tableId was null or undefined when calling timeSlot.');
        }
        if (day === null || day === undefined) {
            throw new Error('Required parameter day was null or undefined when calling timeSlot.');
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


        return this.httpClient.get<Array<string>>(`${this.configuration.basePath}/tables/${encodeURIComponent(String(tableId))}/${encodeURIComponent(String(day.toISOString()))}/timeslots`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a single table
     * Create a single table
     * @param accept Accept Header
     * @param id 
     * @param name 
     * @param tableType 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTable(accept: 'application/json', id: number, name?: string, tableType?: string, body?: UpdateTableRequest, observe?: 'body', reportProgress?: boolean): Observable<TableDto>;
    public updateTable(accept: 'application/json', id: number, name?: string, tableType?: string, body?: UpdateTableRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TableDto>>;
    public updateTable(accept: 'application/json', id: number, name?: string, tableType?: string, body?: UpdateTableRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TableDto>>;
    public updateTable(accept: 'application/json', id: number, name?: string, tableType?: string, body?: UpdateTableRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling updateTable.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateTable.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('Name', <any>name);
        }
        if (tableType !== undefined && tableType !== null) {
            queryParameters = queryParameters.set('TableType', <any>tableType);
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

        return this.httpClient.put<TableDto>(`${this.configuration.basePath}/tables/${encodeURIComponent(String(id))}`,
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
