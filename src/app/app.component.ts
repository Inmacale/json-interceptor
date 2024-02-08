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
    const apiUrl = 'https://api.example.com/data';
    this.http.get(apiUrl).subscribe(
      data => {
        console.log('JSON recibido:', data);
      },
      error => {
        console.error('Error al obtener el JSON:', error);
      }
    );
  }
}
