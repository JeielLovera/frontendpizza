import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatGridList, MatTableDataSource, MatPaginator } from '@angular/material';
import { Producto } from 'src/app/_model/producto';
import { ProductoService } from 'src/app/_service/producto.service';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  dataSource:MatTableDataSource<Producto>;
  tipo: number;
  displayedColumns=['imagenP','nproducto','tdescripcion','mprecio','btnOrdenar'];
  listaOrden: Array<Producto>;
  @Output() listaoutput = new EventEmitter();

  constructor(private productoService:ProductoService) { }
  
  

  ngOnInit() {
    
    this.productoService.listarXtipo(6).subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.listaOrden=new Array<Producto>();
  }

  filtarTipo(tipo: number){
    this.tipo=tipo;
    this.productoService.listarXtipo(tipo).subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }

  Ordenar(item: Producto){
    this.listaOrden.push(item);
    console.log(this.listaOrden);
    this.enviarLista();
  }

  enviarLista(){
    this.listaoutput.emit(this.listaOrden);
  }




}
