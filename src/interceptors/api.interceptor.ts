// api.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private http: HttpClient) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiUrl = 'https://api.example.com/data';

        if (request.url === apiUrl) {

            return this.http.get<any>('assets/mocks/data.json').pipe(

                map((data) => {
                    const response = new HttpResponse({
                        body: data,
                        status: 200
                    });
                    return response;
                })
            );
        } else {

            return next.handle(request);
        }
    }
}
