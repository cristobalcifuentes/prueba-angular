import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todos: ITodo[] = [
    { name: "Instalar angular material", required: true },
    { name: "Crear shared Module", required: false, description: "Crear un módulo compartido" },
    {
      name: "Crear un formulario reactivo con los siguientes campos", required: true, description: "nombre,apellido,edad,sexo" +
        `
      nombre: requerido, alfanumerico máximo 40 caracteres,
      apellido: requerido , alfanumerico máximo 40 caracteres,
      edad:requerido númerico 3 caracteres,
      sexo: requerido, input radio que tenga como valor H o M
       ` },
    {
      name: "validar formulario", required: true, description: `Si la edad es mayor a 17 años se tendrá que mostrar un mensaje de 
       'Eres (una Mujer/ un Hombre) mayor de edad'  dependiendo el sexo , si no, mostrar mensaje 'Eres menor de edad'` }
  ]

  ngOnInit(): void {
  }

}
