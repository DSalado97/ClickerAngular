import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monstruo } from '../models/monstruo';

@Injectable({
  providedIn: 'root'
})
export class MonstruoService {
  private jsonFilePath = 'assets/bestiario.json';

  constructor(private http: HttpClient) {}

  cargarMonstruos(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonFilePath);
  }
}
