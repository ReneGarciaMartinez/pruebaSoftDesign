import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import Swal from 'sweetalert2'
import { Articulo } from 'src/app/models/models';
import { VisorusService } from 'src/app/services/visorus.service';
@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    clave: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    precios: [''],
    activo: ['', []],
  });

  precio: Array<any> = [];

  id: any;
  articulo: Articulo | any;

  constructor(private fb: FormBuilder, private router: Router, private VisorusSvc:VisorusService , private activatedR: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedR.snapshot.params['id'];
    this.miFormulario.setValue({
      clave: '',
      categoria: '',
      nombre: '',
      precios: [],
      activo: '',
    });
  }
//validar
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }
//validar checkBox
  checkbox(campo: string) {
    return this.miFormulario.controls[campo].errors;
  }
//AÑADE PRECIO
  agregarPrecio(value: number) {
    const result = this.precio.filter((n: any, i: any) => { return n.precio == value; })
    if (result.length > 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Registrado',
        showConfirmButton: false,
        timer: 750
      })
    } else {
      this.precio.push({ precio: value });
      console.log(this.precio);
      this.miFormulario.get('precios')?.reset();
    }
  }

  eliminar(value: number) {
    console.log(value);
    const result = this.precio.filter((n: any, i: any) => { return n.precio != value; })
    console.log(result);
    this.precio = result;
  }

  crearArticulo() {
    this.miFormulario.value.precios = this.precio;
    console.log(this.miFormulario.value);
    this.VisorusSvc.createArticulo(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if (data.message) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Guardado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }
}
