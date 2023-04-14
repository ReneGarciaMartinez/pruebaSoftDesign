import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 art_comp='articulos';
 cat_comp='categorias';
  
agregarArticulo(){
  this.art_comp='crear_articulo';
}
verArticulos(){
  this.art_comp='articulos';
}
// categorias

cambiarCategoria(opc:any){
  this.art_comp=opc;
  console.log(this.art_comp);
  
}
}
