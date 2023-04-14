import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo, Categoria } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class VisorusService {
//url
  URL = 'http://visorus.ddns.net:8091';

  constructor(private http: HttpClient) { }
// ARTICULOS
  getArticulos(){
    return this.http.get(`${this.URL}/articulo`);
  }
  updateArticulo(id:number, articulo: Articulo){
    return this.http.put(`${this.URL}/articulo/${id}`, articulo);
  }
  createArticulo(articulo: Articulo){
    return this.http.post(`${this.URL}/articulo`, articulo);
  }

  // CATEGORIAS
  getCategorias(){
    return this.http.get(`${this.URL}/categoria`);
  }

  createCategoria(categoria: Categoria){
    return this.http.post(`${this.URL}/categoria`, categoria);
  }
  
  
  deleteCategoria(id: number){
    return this.http.delete(`${this.URL}/categoria/${id}`);
  }

  deleteArticulo(id: number){
    return this.http.delete(`${this.URL}/articulo/${id}`);
  }

  getOneArticulo(id: number){
    return this.http.get(`${this.URL}/articulo/${id}`);
  }
}
