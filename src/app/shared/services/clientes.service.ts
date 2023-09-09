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
  teste = `https://api.adviceslip.com/advice`
  constructor(private httpClient: HttpClient) {}
  getDitto(){
    return this.httpClient.get(this.teste)
  }

  getAll(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.api);
  }
  getById(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.api}/${id}`);
  }
  create(body: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.api, body);
  }
  updateById(id: string, body: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.api}/${id}`, body);
  }
  removeById(id: string): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${this.api}/${id}`);
  }
}
