/**
 * Innova CRM API
 * Move your app forward with the Innova CRM API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

import {LoadingService} from '../../../../../shared/services/LoadingService';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class ServicesApiService {
    protected basePath = '/innova-vo';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, protected loadingService:LoadingService, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * User Associated Services that belong to the provided Service Category
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param customerId Unique Customer Identifier
     * @param categoryId Unique Service Category Identifier
     */
    public servicesCustomerIdCategoryIdGetUsingGET(customerId: string, categoryId: string, extraHttpRequestParams?: any): Observable<Array<models.Service>> {
    	
		this.loadingService.startLoading();

    	return this.servicesCustomerIdCategoryIdGetUsingGETWithHttpInfo(customerId, categoryId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            }).finally(() => {
             this.loadingService.stopLoading()
           });
    }

    /**
     * User Associated Services
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param customerId Unique Customer Identifier
     */
    public servicesCustomerIdGetUsingGET(customerId: string, extraHttpRequestParams?: any): Observable<Array<models.Service>> {
    	
		this.loadingService.startLoading();

    	return this.servicesCustomerIdGetUsingGETWithHttpInfo(customerId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            }).finally(() => {
             this.loadingService.stopLoading()
           });
    }

    /**
     * Returns the list of bills.
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdBalanceCurrentDetailGetUsingGET(serviceId: string, extraHttpRequestParams?: any): Observable<Array<models.ServiceBalanceDetail>> {
    	
		this.loadingService.startLoading();

    	return this.servicesServiceIdBalanceCurrentDetailGetUsingGETWithHttpInfo(serviceId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            }).finally(() => {
             this.loadingService.stopLoading()
           });
    }

    /**
     * Current Balance of the Service
     * The Service endpoint returns the current balance of the Service. 
     * @param serviceId Unique Service Identifier without special characters that can&#39;t be used in urls
     */
    public servicesServiceIdBalanceCurrentGetUsingGET(serviceId: string, extraHttpRequestParams?: any): Observable<any> {
    	
		this.loadingService.startLoading();

    	return this.servicesServiceIdBalanceCurrentGetUsingGETWithHttpInfo(serviceId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            }).finally(() => {
             this.loadingService.stopLoading()
           });
    }

    /**
     * User Associated Services
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdBalanceTotalDetailGetUsingGET(serviceId: string, extraHttpRequestParams?: any): Observable<Array<models.ServiceBalanceDetail>> {
    	
		this.loadingService.startLoading();

    	return this.servicesServiceIdBalanceTotalDetailGetUsingGETWithHttpInfo(serviceId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            }).finally(() => {
             this.loadingService.stopLoading()
           });
    }

    /**
     * User Associated Services
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdBalanceTotalGetUsingGET(serviceId: string, extraHttpRequestParams?: any): Observable<Array<models.ServiceBalance>> {
    	
		this.loadingService.startLoading();

    	return this.servicesServiceIdBalanceTotalGetUsingGETWithHttpInfo(serviceId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            }).finally(() => {
             this.loadingService.stopLoading()
           });
    }

    /**
     * Service Charts
     * The Services endpoint returns detailed information about service usage. 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdChartsGetUsingGET(serviceId: string, extraHttpRequestParams?: any): Observable<models.Charts> {
    	
		this.loadingService.startLoading();

    	return this.servicesServiceIdChartsGetUsingGETWithHttpInfo(serviceId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            }).finally(() => {
             this.loadingService.stopLoading()
           });
    }

    /**
     * Service Detail
     * The Services endpoint returns detailed information about the Utility Service 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdDetailGetUsingGET(serviceId: string, extraHttpRequestParams?: any): Observable<models.ServiceDetail> {
    	
		this.loadingService.startLoading();

    	return this.servicesServiceIdDetailGetUsingGETWithHttpInfo(serviceId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            }).finally(() => {
             this.loadingService.stopLoading()
           });
    }


    /**
     * User Associated Services that belong to the provided Service Category
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param customerId Unique Customer Identifier
     * @param categoryId Unique Service Category Identifier
     */
    public servicesCustomerIdCategoryIdGetUsingGETWithHttpInfo(customerId: string, categoryId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/services/${customerId}/${categoryId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling servicesCustomerIdCategoryIdGetUsingGET.');
        }
        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new Error('Required parameter categoryId was null or undefined when calling servicesCustomerIdCategoryIdGetUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * User Associated Services
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param customerId Unique Customer Identifier
     */
    public servicesCustomerIdGetUsingGETWithHttpInfo(customerId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/services/${customerId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling servicesCustomerIdGetUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Returns the list of bills.
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdBalanceCurrentDetailGetUsingGETWithHttpInfo(serviceId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/services/${serviceId}/balance/current/detail`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling servicesServiceIdBalanceCurrentDetailGetUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Current Balance of the Service
     * The Service endpoint returns the current balance of the Service. 
     * @param serviceId Unique Service Identifier without special characters that can&#39;t be used in urls
     */
    public servicesServiceIdBalanceCurrentGetUsingGETWithHttpInfo(serviceId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/services/${serviceId}/balance/current`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling servicesServiceIdBalanceCurrentGetUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * User Associated Services
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdBalanceTotalDetailGetUsingGETWithHttpInfo(serviceId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/services/${serviceId}/balance/total/detail`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling servicesServiceIdBalanceTotalDetailGetUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * User Associated Services
     * The Services endpoint returns basic information about the Utility Services associated to the authenticated user. 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdBalanceTotalGetUsingGETWithHttpInfo(serviceId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/services/${serviceId}/balance/total`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling servicesServiceIdBalanceTotalGetUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Service Charts
     * The Services endpoint returns detailed information about service usage. 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdChartsGetUsingGETWithHttpInfo(serviceId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/services/${serviceId}/charts`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling servicesServiceIdChartsGetUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Service Detail
     * The Services endpoint returns detailed information about the Utility Service 
     * @param serviceId Unique Service Identifier
     */
    public servicesServiceIdDetailGetUsingGETWithHttpInfo(serviceId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/services/${serviceId}/detail`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling servicesServiceIdDetailGetUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}