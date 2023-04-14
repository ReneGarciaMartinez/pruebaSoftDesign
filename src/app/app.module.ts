import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponentComponent } from './components/categoria-component/categoria-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponentComponent,
    ArticulosComponent,
    CrearArticuloComponent,
    CrearCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
