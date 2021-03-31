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

import { UnAssignRoles } from '../model/unAssignRoles';
import { UnAssignRolesResponse } from '../model/unAssignRolesResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class UnassignrolesService {

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
     * @param accept Accept Header
     * @param userName 
     * @param permissions 
     * @param roles 
     * @param meta 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unAssignRoles(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'body', reportProgress?: boolean): Observable<UnAssignRolesResponse>;
    public unAssignRoles(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UnAssignRolesResponse>>;
    public unAssignRoles(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UnAssignRolesResponse>>;
    public unAssignRoles(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling unAssignRoles.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (userName !== undefined && userName !== null) {
            queryParameters = queryParameters.set('UserName', <any>userName);
        }
        if (permissions !== undefined && permissions !== null) {
            queryParameters = queryParameters.set('Permissions', <any>permissions);
        }
        if (roles !== undefined && roles !== null) {
            queryParameters = queryParameters.set('Roles', <any>roles);
        }
        if (meta !== undefined && meta !== null) {
            queryParameters = queryParameters.set('Meta', <any>meta);
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


        return this.httpClient.get<UnAssignRolesResponse>(`${this.configuration.basePath}/unassignroles`,
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
     * @param accept Accept Header
     * @param userName 
     * @param permissions 
     * @param roles 
     * @param meta 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unAssignRolesDELETE(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'body', reportProgress?: boolean): Observable<UnAssignRolesResponse>;
    public unAssignRolesDELETE(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UnAssignRolesResponse>>;
    public unAssignRolesDELETE(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UnAssignRolesResponse>>;
    public unAssignRolesDELETE(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling unAssignRolesDELETE.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (userName !== undefined && userName !== null) {
            queryParameters = queryParameters.set('UserName', <any>userName);
        }
        if (permissions !== undefined && permissions !== null) {
            queryParameters = queryParameters.set('Permissions', <any>permissions);
        }
        if (roles !== undefined && roles !== null) {
            queryParameters = queryParameters.set('Roles', <any>roles);
        }
        if (meta !== undefined && meta !== null) {
            queryParameters = queryParameters.set('Meta', <any>meta);
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


        return this.httpClient.delete<UnAssignRolesResponse>(`${this.configuration.basePath}/unassignroles`,
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
     * @param accept Accept Header
     * @param userName 
     * @param permissions 
     * @param roles 
     * @param meta 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unAssignRolesPOST(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: UnAssignRoles, observe?: 'body', reportProgress?: boolean): Observable<UnAssignRolesResponse>;
    public unAssignRolesPOST(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: UnAssignRoles, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UnAssignRolesResponse>>;
    public unAssignRolesPOST(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: UnAssignRoles, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UnAssignRolesResponse>>;
    public unAssignRolesPOST(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: UnAssignRoles, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling unAssignRolesPOST.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (userName !== undefined && userName !== null) {
            queryParameters = queryParameters.set('UserName', <any>userName);
        }
        if (permissions !== undefined && permissions !== null) {
            queryParameters = queryParameters.set('Permissions', <any>permissions);
        }
        if (roles !== undefined && roles !== null) {
            queryParameters = queryParameters.set('Roles', <any>roles);
        }
        if (meta !== undefined && meta !== null) {
            queryParameters = queryParameters.set('Meta', <any>meta);
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


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<UnAssignRolesResponse>(`${this.configuration.basePath}/unassignroles`,
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
     * @param accept Accept Header
     * @param userName 
     * @param permissions 
     * @param roles 
     * @param meta 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unAssignRolesPUT(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: UnAssignRoles, observe?: 'body', reportProgress?: boolean): Observable<UnAssignRolesResponse>;
    public unAssignRolesPUT(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: UnAssignRoles, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UnAssignRolesResponse>>;
    public unAssignRolesPUT(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: UnAssignRoles, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UnAssignRolesResponse>>;
    public unAssignRolesPUT(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: UnAssignRoles, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling unAssignRolesPUT.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (userName !== undefined && userName !== null) {
            queryParameters = queryParameters.set('UserName', <any>userName);
        }
        if (permissions !== undefined && permissions !== null) {
            queryParameters = queryParameters.set('Permissions', <any>permissions);
        }
        if (roles !== undefined && roles !== null) {
            queryParameters = queryParameters.set('Roles', <any>roles);
        }
        if (meta !== undefined && meta !== null) {
            queryParameters = queryParameters.set('Meta', <any>meta);
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


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<UnAssignRolesResponse>(`${this.configuration.basePath}/unassignroles`,
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