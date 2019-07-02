import { Component, OnInit, Input} from '@angular/core';
import { Producto } from 'src/app/_model/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/_service/producto.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {


  listaOrden:Array<Producto>;
  dataSource:MatTableDataSource<Producto>;
  displayedColumns=['imagenP','nproducto','mprecio'];
  valid=true;

  constructor(private route:ActivatedRoute) { 
    this.listaOrden=new Array<Producto>();
  }

  ngOnInit() {
  }

  llenarCarrito(e){
    console.log(e);
    this.listaOrden=e;
  }

  Mostrar(){
    console.log(this.listaOrden);
    this.dataSource=new MatTableDataSource(this.listaOrden);
    this.valid=false;
  }



}
