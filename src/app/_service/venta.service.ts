import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../_model/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  url:string=`${HOST}/ventas`;

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Venta[]>(this.url);
  }
}
