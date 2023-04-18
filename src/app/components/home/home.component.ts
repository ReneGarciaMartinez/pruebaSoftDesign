import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  art_comp='articulos';
  cat_comp='categorias';
   

  constructor() { }

  ngOnInit(): void {
  }
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
