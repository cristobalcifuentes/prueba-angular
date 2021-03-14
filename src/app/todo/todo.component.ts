import { Component } from '@angular/core';
import { ITodo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor() { }

  todos: ITodo[] = [
    { name: "Llenar dataTables", required: true, description: "abrir ruta tables.component.ts y seguir TODOS del archivo src/app/pages/tables/tables.component.ts" },
    {
      name: "Crear un formulario reactivo con los siguientes campos", required: true, description:
        `
      nombre: requerido, alfanumerico máximo 40 caracteres,
      apellido: requerido , alfanumerico máximo 40 caracteres,
      edad:requerido numérico 3 caracteres,
      sexo: requerido, input radio que tenga como valor F o M,
      email: requerido, validar que tenga estructura de email
      trabaja: boolean,
       ` },
    { name: "Instalar librería ngx-toastr", required: true, description: "Instalar la librería, no olvidar que importar archivos de estilos necesarios para la librería" },
    {
      name: "Validar formulario", required: true, description: `
      El botón de enviar tendrá que estar deshabilitado si la data está incorrecta.
      Mostrar error de cada campo únicamente si el campo es erroneo y ya a sido tocado con la leyenda "campo inválido"
     `
    },
    {
      name: "Insertar formulario", required: true, description: `Se insertará formulario en El endpoint indicado en el archivo de variables de entorno,
       utiliza la interfaz IUserRespond para que puedas mandar los datos de manera correcta`
    }

  ]
}
