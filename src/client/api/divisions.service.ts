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

import { DivisionDto } from '../model/divisionDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class DivisionsService {

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
     * Gets all Divisions
     * Gets all Divisions
     * @param accept Accept Header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllDivisions(accept: 'application/json', observe?: 'body', reportProgress?: boolean): Observable<DivisionDto>;
    public getAllDivisions(accept: 'application/json', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DivisionDto>>;
    public getAllDivisions(accept: 'application/json', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DivisionDto>>;
    public getAllDivisions(accept: 'application/json', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getAllDivisions.');
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


        return this.httpClient.get<DivisionDto>(`${this.configuration.basePath}/divisions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param accept Accept Header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPaymentInformations(accept: 'application/json', observe?: 'body', reportProgress?: boolean): Observable<DivisionDto>;
    public getPaymentInformations(accept: 'application/json', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DivisionDto>>;
    public getPaymentInformations(accept: 'application/json', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DivisionDto>>;
    public getPaymentInformations(accept: 'application/json', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getPaymentInformations.');
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


        return this.httpClient.get<DivisionDto>(`${this.configuration.basePath}/divisions/payment`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}