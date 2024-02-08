// api.interceptor.ts
import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    urls: { path: string; file: string }[] = [
        { path: 'data', file: 'data' }
    ]

    constructor(private http: HttpClient) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //un if con enviroment este a true

        this.urls.forEach(url => {
            if (request.url.includes(url.path)) {
                return this.http.get<any>('assets/mocks/' + url.file + '.json').pipe(
                    map((data) => {
                        const response = new HttpResponse({
                            body: data,
                            status: 200
                        });
                        console.log(response)
                        return response;
                    })
                );
            } else {

                return next.handle(request);
            }
        });


    }
}
