import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment/enviroment';
import { Conta } from '../models/conta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContasService {
  api = `${enviroment.api}/contas`;
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(this.api);
  }
  listar_paginado(page: number, pageSize: number): Observable<Conta[]> {
    return this.httpClient
    .get<Conta[]>(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }
  getById(id: number): Observable<Conta> {
    return this.httpClient.get<Conta>(`${this.api}/${id}`);
  }
  create(body: Conta): Observable<Conta> {
    return this.httpClient.post<Conta>(this.api, body);
  }
  updateById(id: number, body: Conta): Observable<Conta> {
    return this.httpClient.put<Conta>(`${this.api}/${id}`, body);
  }
  removeById(id: number): Observable<Conta> {
    return this.httpClient.delete<Conta>(`${this.api}/${id}`);
  }
  depositarByIdConta(id: number, body: Conta): Observable<Conta> {
    return this.httpClient.post<Conta>(`${this.api}/${id}/deposito`, body);
  }
  sacarByIdConta(id: number, body: Conta): Observable<Conta> {
    return this.httpClient.post<Conta>(`${this.api}/${id}/saque`, body);
  }
  transferenciaByIdConta(id: number, body: Conta): Observable<Conta> {
    return this.httpClient.post<Conta>(
      `${this.api}/${id}/transferencia`,
      body
    );
  }
}
