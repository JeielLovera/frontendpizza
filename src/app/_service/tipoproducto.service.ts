import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Tipoproducto } from '../_model/tipoproducto';

@Injectable({
  providedIn: 'root'
})
export class TipoproductoService {
  url:string =`${HOST}/tipoproductos`;  

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Tipoproducto[]>(this.url);
  }
  buscar(id:number){
    return this.http.get<Tipoproducto>(`${this.url}/${id}`);
  }
}
