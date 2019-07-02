import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Ventaproducto } from '../_model/ventaproducto';

@Injectable({
  providedIn: 'root'
})
export class VentaproductoService {

  url: string = `${HOST}/ventaProductos`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Ventaproducto[]>(this.url);
  }

  buscar(id: number){
    return this.http.get<Ventaproducto>(`${this.url}/${id}`);
  }
}
