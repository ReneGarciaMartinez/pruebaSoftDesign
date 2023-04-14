import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisorusService } from 'src/app/services/visorus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {


  articulos: any;

  constructor(private VisorusSvc:VisorusService, private router: Router){}

  ngOnInit(){
    this.getArt();
  }

  getArt(){
    this.VisorusSvc.getArticulos().subscribe((data: any) => {
      this.articulos = data.data;
      console.log(this.articulos);
    });
  }

  editar(id: number){
    this.router.navigate(['/form-articulo/',id])
  }

  eliminar(id: number){
    console.log(id);
    this.VisorusSvc.deleteArticulo(id).subscribe((data: any) => {
      console.log(data);
      this.getArt();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

}
