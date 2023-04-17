import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Articulo } from 'src/app/models/models';
import { VisorusService } from 'src/app/services/visorus.service';
@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css'],
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
  articulo: Articulo | any;
  id: any;
 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private VisorusSvc: VisorusService,
    private activatedR: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedR.snapshot.params['id'];
    if (this.id) {
      this.VisorusSvc.getArticulo(this.id).subscribe((res: any) => {
        this.articulo = res;
        this.miFormulario.setValue({
          clave: this.articulo?.clave,
          categoria: this.articulo?.categoria.id,
          nombre: this.articulo?.nombre,
          precios: '',
          activo: this.articulo?.activo,
        });
        for (const val of res.precios) {
          this.agregarPrecio(val.precio);
        }
      });
    } else {
      this.miFormulario.setValue({
        clave: '',
        categoria: '',
        nombre: '',
        precios: [],
        activo: '',
      });
    }
  }
  //validar
  campoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
  //validar checkBox
  checkbox(campo: string) {
    return this.miFormulario.controls[campo].errors;
  }
  //AÑADE PRECIO
  agregarPrecio(value: number) {
    const result = this.precio.filter((n: any, i: any) => {
      return n.precio == value;
    });
    if (result.length > 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Registrado',
        showConfirmButton: false,
        timer: 750,
      });
    } else {
      this.precio.push({ precio: value });
      this.miFormulario.get('precios')?.reset();
    }
  }

  eliminar(value: number) {
    const result = this.precio.filter((n: any, i: any) => {
      return n.precio != value;
    });
    this.precio = result;
  }

  crearArticulo() {
    this.miFormulario.value.precios = this.precio;
    this.VisorusSvc.createArticulo(this.miFormulario.value).subscribe(
      (res: any) => {
        if (res.message) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Guardado',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    );
  }
  // update articulo

  actualizarArticulo() {
    this.miFormulario.value.precios = this.precio;
    this.VisorusSvc.actualizarArticulo(this.id, this.miFormulario.value).subscribe((res: any) => {
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
