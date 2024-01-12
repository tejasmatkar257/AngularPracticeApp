import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'http://localhost:3000/items'; // Replace with your JSON server endpoint

  constructor(private http: HttpClient) { }

  addItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
