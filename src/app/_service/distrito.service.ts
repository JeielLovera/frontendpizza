import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Distrito } from '../_model/distrito';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  url:string = `${HOST}/distritos`;

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Distrito[]>(this.url);
  }

  buscar(id: number){
    return this.http.get<Distrito>(`${this.url}/${id}`);
  }

}
