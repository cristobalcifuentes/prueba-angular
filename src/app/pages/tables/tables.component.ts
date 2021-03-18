import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';


import{UserService,} from './../../service/user.service'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit{

  users: IUser[] = []
  usersFemale: IUser[] = []
  usersMale: IUser[] = []

  constructor(private userService: UserService) {


  }

  ngOnInit(){
    this.fetchUsers();
    this.fetchUsersFemale();
    this.fetchUsersMale();
  }

  fetchUsers(){
    this.userService.getAllUsers()
    .subscribe( users =>{
      users.forEach(user=>{
        this.users.push(this.userService.transformIUserRespondToIUser(user));
        this.users.splice(10, 1);
      })

    })
  }

  fetchUsersFemale(){

    this.userService.getAllUsers()
    .subscribe( users =>{
      users.forEach(user =>{
        if(user.gender==="F"){
          this.usersFemale.push(this.userService.transformIUserRespondToIUser(user));
          this.usersFemale.splice(10, 1);
        };
      })
    })
  }

  fetchUsersMale(){
    this.userService.getAllUsers()
    .subscribe( users =>{
      users.forEach(user =>{
        if(user.gender==='M'){
          this.usersMale.push(this.userService.transformIUserRespondToIUser(user));
          this.usersMale.splice(10, 1);
        };
      })
    })
    this.usersMale.splice(4, 1);
  }



}
// ENDPOINT Y URLBASE ubicados en archivo environments.ts
// Está prohibido alterar el componente table-test
// Mostrar como máximo 10 registros en cada tabla
// TODO 1 Consumir Servicio por método get para obtener data y llenar la primera tabla users
// TODO 1.1 En el nombre concatenar firstName y lastName con un espacio entre ellos
// TODO 2 Llenar la 2da tabla de usersFemale únicamente con registros donde gender sea correspondiente a 'F'
// TODO 2.1 Llenar la 3ra tabla de usersMale únicamente con registros donde gender sea correspondiente a 'M'
