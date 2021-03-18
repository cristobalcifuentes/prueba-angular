import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUserRespond, IName, IUser } from 'src/app/interfaces/user';


import {environment} from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser;

  usersForGander: IUser[] = []

  constructor(
    private Http: HttpClient
  ) { }

    getAllUsers(){
      return this.Http.get<IUserRespond[]>(environment.URL_BASE + environment.URL_ENDPOINT)
    }

    transformIUserRespondToIUser(user: IUserRespond){

      this.user = user;
      this.user.name = user.name.firstName + " " + user.name.lastName
      return this.user

    }

    fetchUsersForGander(garder : String){

      this.getAllUsers()
      .subscribe( users =>{
        users.forEach(user =>{
          if(user.gender===garder){
            this.usersForGander.push(this.transformIUserRespondToIUser(user));
          };
        })
      })

      return this.usersForGander
    }



}
