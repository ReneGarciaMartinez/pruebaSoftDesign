export interface Categoria {
    clave: String;
    fechaCreado: Date; // fecha en milisegundos
    nombre: String;
    activo: boolean;
}

export interface Articulo {
    clave: string;
    categoria: Categoria
    nombre: string;
    precios: Array<Precio>; // 1 precio o mas
    activo: boolean;
    }

    export interface Precio {
        precio: number;
    }
