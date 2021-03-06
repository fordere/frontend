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

import { AssignRoles } from '../model/assignRoles';
import { AssignRolesResponse } from '../model/assignRolesResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class AssignrolesService {

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
    public assignRoles(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'body', reportProgress?: boolean): Observable<AssignRolesResponse>;
    public assignRoles(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AssignRolesResponse>>;
    public assignRoles(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AssignRolesResponse>>;
    public assignRoles(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling assignRoles.');
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


        return this.httpClient.get<AssignRolesResponse>(`${this.configuration.basePath}/assignroles`,
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
    public assignRolesDELETE(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'body', reportProgress?: boolean): Observable<AssignRolesResponse>;
    public assignRolesDELETE(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AssignRolesResponse>>;
    public assignRolesDELETE(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AssignRolesResponse>>;
    public assignRolesDELETE(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling assignRolesDELETE.');
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


        return this.httpClient.delete<AssignRolesResponse>(`${this.configuration.basePath}/assignroles`,
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
    public assignRolesPOST(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: AssignRoles, observe?: 'body', reportProgress?: boolean): Observable<AssignRolesResponse>;
    public assignRolesPOST(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: AssignRoles, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AssignRolesResponse>>;
    public assignRolesPOST(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: AssignRoles, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AssignRolesResponse>>;
    public assignRolesPOST(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: AssignRoles, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling assignRolesPOST.');
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

        return this.httpClient.post<AssignRolesResponse>(`${this.configuration.basePath}/assignroles`,
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
    public assignRolesPUT(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: AssignRoles, observe?: 'body', reportProgress?: boolean): Observable<AssignRolesResponse>;
    public assignRolesPUT(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: AssignRoles, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AssignRolesResponse>>;
    public assignRolesPUT(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: AssignRoles, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AssignRolesResponse>>;
    public assignRolesPUT(accept: 'application/json', userName?: string, permissions?: string, roles?: string, meta?: string, body?: AssignRoles, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling assignRolesPUT.');
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

        return this.httpClient.put<AssignRolesResponse>(`${this.configuration.basePath}/assignroles`,
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
