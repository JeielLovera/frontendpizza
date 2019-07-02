import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/_model/cliente';
import { ClienteService } from 'src/app/_service/cliente.service';
import { VentaService } from 'src/app/_service/venta.service';
import { Venta } from 'src/app/_model/venta';
import { Distrito } from 'src/app/_model/distrito';
import { DistritoService } from 'src/app/_service/distrito.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  form:FormGroup;
  cliente:Cliente;
  venta:Venta;
  distrito:Distrito;
  //distritos:Distrito[];
  constructor(private clienteService:ClienteService,private ventaService: VentaService,
    private distritoService: DistritoService
    ) { }

  ngOnInit() {
    this.cliente= new Cliente();
    this.venta=new Venta();
    this.distrito=new Distrito;
    this.distritoService.listar().subscribe()
  }
  
  registrar(){
    this.cliente.ncliente=this.form.value['ncliente'];
    this.cliente.numtelefono=this.form.value['numtelefono'];
    ///Falta direccion 
    this.cliente.numdireccion=this.form.value['numdireccion'];
    this.cliente.treferencia=this.form.value['treferencia'];
    this.cliente.tcorreo=this.form.value['tcorreo'];
    this.cliente.dni=this.form.value['dni'];
  }

}
