import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ProductoListComponent } from './pages/producto-list/producto-list.component';




@NgModule({
  declarations: [
    AppComponent,
    DistritoComponent,
    TipodireccionComponent,
    DireccionComponent,
    ClienteComponent,
    TipoproductoComponent,
    ProductoComponent,
    LocalComponent,
    VentaComponent,
    VentaproductoComponent,
    VentaproductoEditComponent,
    ProductoListComponent
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
