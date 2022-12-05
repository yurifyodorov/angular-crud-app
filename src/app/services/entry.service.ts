import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry.model';
const baseUrl = 'http://localhost:8080/api/entries';
@Injectable({
  providedIn: 'root'
})
export class EntryService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Entry[]> {
    return this.http.get<Entry[]>(baseUrl);
  }
  get(id: any): Observable<Entry> {
    return this.http.get<Entry>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Entry[]> {
    return this.http.get<Entry[]>(`${baseUrl}?title=${title}`);
  }
}
