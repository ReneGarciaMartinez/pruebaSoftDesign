import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { VisorusService } from 'src/app/services/visorus.service';
import { Categoria } from 'src/app/models/models';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    clave: ['',[Validators.required]],
    fechaCreado: ['',[Validators.required]],
    nombre: ['',[Validators.required]],
  });
    id:any;
    categoria:Categoria|any;
  constructor(private fb: FormBuilder, private router: Router, private VisorusSvc:VisorusService, private activatedR:ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activatedR.snapshot.params['id'];
    if (this.id) {
      this.VisorusSvc.getCategoria(this.id).subscribe((res: any) => {
        this.categoria = res;
        this.miFormulario.setValue({
          clave: this.categoria.clave,
          fechaCreado: this.categoria.fechaCreado,
          nombre: this.categoria.nombre,
        });
      });
    } else {
    this.miFormulario.setValue({
      clave: '',
      fechaCreado: '',
      nombre: '',
    });
  }
  }
  
  //validamos campos del formulario
  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }
  //
  crearCategoria(){
    console.log(this.miFormulario.value);
    this.VisorusSvc.createCategoria(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if(data.message){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }
  //Actualizar
  actualizarCategoria() {
    this.VisorusSvc.actualizarCategoria(this.id, this.miFormulario.value).subscribe((res: any) => {
        if (res.message) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Actualizado',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    );
  }
}
