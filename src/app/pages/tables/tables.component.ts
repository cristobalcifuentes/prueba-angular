import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser, IUserRespond } from 'src/app/interfaces/user';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  users: IUser[] = []
  usersFemale: IUser[] = []
  usersMale: IUser[] = []

  constructor() { }

  ngOnInit(): void {

  }

}

// TODO 1 Consumir Servicio por método get para consumir data y llenar la primera tabla
// TODO 1.1 En el nombre concatenar firstName y lastName con un espacio entre ellos (Está prohibido alterar el componente table-test) 
// TODO 2 Llenar la 2da tabla de usersFemale únicamente con registros donde gender sea correspondiente a 'F'
// TODO 2.1 Llenar la 3ra tabla de usersMale únicamente con registros donde gender sea correspondiente a 'M'