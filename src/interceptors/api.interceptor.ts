// api.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private http: HttpClient) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiUrl = 'https://api.example.com/data'; // URL de la API

        if (request.url === apiUrl) {
            // Si la solicitud es para la URL de la API, carga el JSON externo
            return this.http.get<any>('/mocks/data.json').pipe(
                // Procesa la respuesta como un evento HTTP
                map((data) => {
                    const response = new HttpResponse({
                        body: data,
                        status: 200 // Simula un estado 200 OK
                    });
                    return response;
                })
            );
        } else {
            // Si no es la URL de la API, pasa la solicitud al siguiente manipulador
            return next.handle(request);
        }
    }
}
