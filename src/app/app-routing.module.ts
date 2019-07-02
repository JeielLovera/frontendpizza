import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistritoComponent } from './pages/distrito/distrito.component';
import { TipodireccionComponent } from './pages/tipodireccion/tipodireccion.component';
import { DireccionComponent } from './pages/direccion/direccion.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { TipoproductoComponent } from './pages/tipoproducto/tipoproducto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { LocalComponent } from './pages/local/local.component';
import { VentaproductoComponent } from './pages/ventaproducto/ventaproducto.component';
import { VentaproductoEditComponent } from './pages/ventaproducto/ventaproducto-edit/ventaproducto-edit.component';
import { VentaComponent } from './pages/venta/venta.component';
import{ProductoListComponent} from './pages/producto-list/producto-list.component';


const routes: Routes = [
  {path:'distrito', component: DistritoComponent},
  {path: 'tipodireccion', component: TipodireccionComponent},
  {path: 'direccion', component: DireccionComponent},
  {path: 'cliente', component: ClienteComponent},
  {path:'tipoproducto',component:TipoproductoComponent},
  {path:'producto',component:ProductoComponent},
  {path:'local',component:LocalComponent},
  {path:'venta',component:VentaComponent},
  {path:'ventaproducto', component:VentaproductoComponent, children:[
  {path:'nuevo', component:VentaproductoEditComponent}
  ]},
  {path:'producto-list', component:ProductoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
