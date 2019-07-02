import { Injectable } from '@angular/core';
import { HOST } from '../_shared/var.constant';
import { HttpClient } from '@angular/common/http';
import { Local } from '../_model/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  url:string=`${HOST}/locales`;

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Local[]>(this.url);
  }

  buscar(id:number){
    return this.http.get<Local>(`${this.url}/${id}`);
  }
}
