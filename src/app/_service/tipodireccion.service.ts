import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Tipodireccion } from '../_model/tipodireccion';

@Injectable({
  providedIn: 'root'
})
export class TipodireccionService {

  url:string = `${HOST}/tipodirecciones`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Tipodireccion[]>(this.url);
  }

  buscar(id: number){
    return this.http.get<Tipodireccion>(`${this.url}/${id}`);
  }
  
}
