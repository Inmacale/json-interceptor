import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    this.http.get('data').subscribe((response) => {
      console.log('Respuesta del endpoint /api/datos:', response);
    });
    this.http.get('users').subscribe((response) => {
      console.log('Respuesta del endpoint /api/usuarios:', response);
    });
    this.http.get('products').subscribe((response) => {
      console.log('Respuesta del endpoint /api/usuarios:', response);
    });
    this.http.get('sales').subscribe((response) => {
      console.log('Respuesta del endpoint /api/usuarios:', response);
    });
  }
}
