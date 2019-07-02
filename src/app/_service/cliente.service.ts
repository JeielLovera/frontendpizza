import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../_model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = `${HOST}/clientes`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Cliente[]>(this.url);
  }

  buscar(id: number){
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }
  
}
