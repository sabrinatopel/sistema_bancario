import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment/enviroment';
import { Contas } from '../models/contas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContasService {
  api = `${enviroment.api}/contas`;
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Contas[]> {
    return this.httpClient.get<Contas[]>(this.api);
  }
  getById(id: string): Observable<Contas> {
    return this.httpClient.get<Contas>(`${this.api}/${id}`);
  }
  create(body: Contas): Observable<Contas> {
    return this.httpClient.post<Contas>(this.api, body);
  }
  updateById(id: string, body: Contas): Observable<Contas> {
    return this.httpClient.put<Contas>(`${this.api}/${id}`, body);
  }
  removeById(id: string): Observable<Contas> {
    return this.httpClient.delete<Contas>(`${this.api}/${id}`);
  }
  depositarByIdConta(id: string, body: Contas): Observable<Contas> {
    return this.httpClient.post<Contas>(`${this.api}/${id}/deposito`, body);
  }
  sacarByIdConta(id: string, body: Contas): Observable<Contas> {
    return this.httpClient.post<Contas>(`${this.api}/${id}/saque`, body);
  }
  transferenciaByIdConta(id: string, body: Contas): Observable<Contas> {
    return this.httpClient.post<Contas>(
      `${this.api}/${id}/transferencia`,
      body
    );
  }
}
