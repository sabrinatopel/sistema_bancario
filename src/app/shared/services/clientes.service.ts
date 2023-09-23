import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment/enviroment';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  api = `${enviroment.api}/clientes`;
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.api);
  }

  listar_paginado(page: number, pageSize: number): Observable<Cliente[]> {
    return this.httpClient
    .get<Cliente[]>(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }
  getById(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.api}/${id}`);
  }
  create(body: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.api, body);
  }
  updateById(id: number, body: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.api}/${id}`, body);
  }
  removeById(id: number): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${this.api}/${id}`);
  }
}
