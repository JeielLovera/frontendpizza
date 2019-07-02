import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Direccion } from '../_model/direccion';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  url: string = `${HOST}/direcciones`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Direccion[]>(this.url);
  }

  buscar(id: number){
    return this.http.get<Direccion>(`${this.url}/${id}`);
  }
  
}
