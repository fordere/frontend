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

import { AddNewsRequest } from '../model/addNewsRequest';
import { NewsDto } from '../model/newsDto';
import { UpdateIsPublishedRequest } from '../model/updateIsPublishedRequest';
import { UpdateNewsRequest } from '../model/updateNewsRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

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
     * Add a news.
     * Add a news.
     * @param accept Accept Header
     * @param userAuthId 
     * @param postDate 
     * @param title 
     * @param content 
     * @param summary 
     * @param isPublished 
     * @param divisionId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addNews(accept: 'application/json', userAuthId?: number, postDate?: Date, title?: string, content?: string, summary?: string, isPublished?: boolean, divisionId?: number, body?: AddNewsRequest, observe?: 'body', reportProgress?: boolean): Observable<NewsDto>;
    public addNews(accept: 'application/json', userAuthId?: number, postDate?: Date, title?: string, content?: string, summary?: string, isPublished?: boolean, divisionId?: number, body?: AddNewsRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewsDto>>;
    public addNews(accept: 'application/json', userAuthId?: number, postDate?: Date, title?: string, content?: string, summary?: string, isPublished?: boolean, divisionId?: number, body?: AddNewsRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewsDto>>;
    public addNews(accept: 'application/json', userAuthId?: number, postDate?: Date, title?: string, content?: string, summary?: string, isPublished?: boolean, divisionId?: number, body?: AddNewsRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling addNews.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (userAuthId !== undefined && userAuthId !== null) {
            queryParameters = queryParameters.set('UserAuthId', <any>userAuthId);
        }
        if (postDate !== undefined && postDate !== null) {
            queryParameters = queryParameters.set('PostDate', <any>postDate.toISOString());
        }
        if (title !== undefined && title !== null) {
            queryParameters = queryParameters.set('Title', <any>title);
        }
        if (content !== undefined && content !== null) {
            queryParameters = queryParameters.set('Content', <any>content);
        }
        if (summary !== undefined && summary !== null) {
            queryParameters = queryParameters.set('Summary', <any>summary);
        }
        if (isPublished !== undefined && isPublished !== null) {
            queryParameters = queryParameters.set('IsPublished', <any>isPublished);
        }
        if (divisionId !== undefined && divisionId !== null) {
            queryParameters = queryParameters.set('DivisionId', <any>divisionId);
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

        return this.httpClient.post<NewsDto>(`${this.configuration.basePath}/news`,
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
     * Get all news.
     * Get all news.
     * @param accept Accept Header
     * @param page 
     * @param pageSize 
     * @param offset 
     * @param pagingRequested 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllNews(accept: 'application/json', page?: number, pageSize?: number, offset?: number, pagingRequested?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<NewsDto>>;
    public getAllNews(accept: 'application/json', page?: number, pageSize?: number, offset?: number, pagingRequested?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NewsDto>>>;
    public getAllNews(accept: 'application/json', page?: number, pageSize?: number, offset?: number, pagingRequested?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NewsDto>>>;
    public getAllNews(accept: 'application/json', page?: number, pageSize?: number, offset?: number, pagingRequested?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getAllNews.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('Page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', <any>pageSize);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('Offset', <any>offset);
        }
        if (pagingRequested !== undefined && pagingRequested !== null) {
            queryParameters = queryParameters.set('PagingRequested', <any>pagingRequested);
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


        return this.httpClient.get<Array<NewsDto>>(`${this.configuration.basePath}/news`,
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
     * Get news by Id.
     * Get news by Id.
     * @param accept Accept Header
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getNewsById(accept: 'application/json', id: number, observe?: 'body', reportProgress?: boolean): Observable<NewsDto>;
    public getNewsById(accept: 'application/json', id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewsDto>>;
    public getNewsById(accept: 'application/json', id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewsDto>>;
    public getNewsById(accept: 'application/json', id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getNewsById.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getNewsById.');
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


        return this.httpClient.get<NewsDto>(`${this.configuration.basePath}/news/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Patch update IsPublished.
     * Patch update IsPublished.
     * @param accept Accept Header
     * @param id 
     * @param isPublished 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateIsPublished(accept: 'application/json', id: number, isPublished?: boolean, body?: UpdateIsPublishedRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateIsPublished(accept: 'application/json', id: number, isPublished?: boolean, body?: UpdateIsPublishedRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateIsPublished(accept: 'application/json', id: number, isPublished?: boolean, body?: UpdateIsPublishedRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateIsPublished(accept: 'application/json', id: number, isPublished?: boolean, body?: UpdateIsPublishedRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling updateIsPublished.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateIsPublished.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (isPublished !== undefined && isPublished !== null) {
            queryParameters = queryParameters.set('IsPublished', <any>isPublished);
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


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<any>(`${this.configuration.basePath}/news/${encodeURIComponent(String(id))}`,
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
     * Update a news.
     * Update a news.
     * @param accept Accept Header
     * @param id 
     * @param user 
     * @param postDate 
     * @param title 
     * @param content 
     * @param isPublished 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateNews(accept: 'application/json', id?: number, user?: string, postDate?: Date, title?: string, content?: string, isPublished?: boolean, body?: UpdateNewsRequest, observe?: 'body', reportProgress?: boolean): Observable<NewsDto>;
    public updateNews(accept: 'application/json', id?: number, user?: string, postDate?: Date, title?: string, content?: string, isPublished?: boolean, body?: UpdateNewsRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NewsDto>>;
    public updateNews(accept: 'application/json', id?: number, user?: string, postDate?: Date, title?: string, content?: string, isPublished?: boolean, body?: UpdateNewsRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NewsDto>>;
    public updateNews(accept: 'application/json', id?: number, user?: string, postDate?: Date, title?: string, content?: string, isPublished?: boolean, body?: UpdateNewsRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling updateNews.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }
        if (user !== undefined && user !== null) {
            queryParameters = queryParameters.set('User', <any>user);
        }
        if (postDate !== undefined && postDate !== null) {
            queryParameters = queryParameters.set('PostDate', <any>postDate.toISOString());
        }
        if (title !== undefined && title !== null) {
            queryParameters = queryParameters.set('Title', <any>title);
        }
        if (content !== undefined && content !== null) {
            queryParameters = queryParameters.set('Content', <any>content);
        }
        if (isPublished !== undefined && isPublished !== null) {
            queryParameters = queryParameters.set('IsPublished', <any>isPublished);
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

        return this.httpClient.put<NewsDto>(`${this.configuration.basePath}/news`,
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
