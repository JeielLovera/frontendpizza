import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../_model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string=`${HOST}/productos`

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Producto[]>(this.url);
  }
  buscar(id:number){
    return this.http.get<Producto>(`${this.url}/${id}`);
  }

  listarXtipo(id: number){
    return this.http.get<Producto[]>(`${this.url}/ctipoproducto/${id}`);
  }

}
