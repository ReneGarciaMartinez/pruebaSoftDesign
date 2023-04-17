import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisorusService } from 'src/app/services/visorus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-component',
  templateUrl: './categoria-component.component.html',
  styleUrls: ['./categoria-component.component.css']
})
export class CategoriaComponentComponent implements OnInit {

  categorias: any;

  constructor(private VisorusSvc:VisorusService, private router:Router){}

  ngOnInit(){
    this.getCategorias();
  }

  getCategorias(){
    this.VisorusSvc.getCategorias().subscribe((data: any) => {
      this.categorias = data.data;
      console.log(this.categorias);
    });
  }
  editar(id: number){
    this.router.navigate(['/crear-categoria',id]);
  }
  eliminar(id: number){
    console.log(id);
    this.VisorusSvc.deleteCategoria(id).subscribe((data: any) => {
      console.log(data);
      this.getCategorias();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }
}
