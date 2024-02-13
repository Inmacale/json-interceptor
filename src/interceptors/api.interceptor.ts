// api.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, catchError, from, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    private endpoints: { [key: string]: string } = {
        'data': './assets/mocks/data.json',
        'users': './assets/mocks/users.json',
        'products': './assets/mocks/products.json',
        'sales': './assets/mocks/sales.json',

    };

    constructor(private http: HttpClient) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const endpoint = this.endpoints[request.url];

        if (endpoint) {
            return this.handleMockRequest(endpoint);
        } else {
            return next.handle(request);
        }
    }

    private handleMockRequest(endpoint: string): Observable<HttpEvent<any>> {
        return this.http.get<any>(endpoint).pipe(
            map(data => new HttpResponse({ status: 200, body: data }))
        );
    }
}
