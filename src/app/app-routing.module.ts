import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { CategoriaComponentComponent } from './components/categoria-component/categoria-component.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'articulos',
    component: ArticulosComponent
  },
  {
    path: 'crear-articulo',
    component: CrearArticuloComponent
  },
  {
    path: 'crear-articulo/:id',
    component: CrearArticuloComponent
  },
  {
    path: 'crear-categoria',
    component: CrearCategoriaComponent
  },
  {
    path: 'crear-categoria/:id',
    component: CrearCategoriaComponent
  },
  {
    path: 'categorias',
    component: CategoriaComponentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
