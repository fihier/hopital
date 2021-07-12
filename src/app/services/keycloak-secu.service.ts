import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
import { any } from '../../../node_modules/codelyzer/util/function';

declare var keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecuService {

  public kc: KeycloakInstance;

  constructor() { }

  async init(){
    console.log("security initialisation ...");
    this.kc= new keycloak({
      url:"http://localhost:8080/auth",
      realm:"Bocobi2realm", //host-realm a cree dans keycloak
      clientId:"Bocobi2App" // AngularHostoApp a cree dans keycloak
    });

    await this.kc.init({
      //onLoad:'login-required',
      onLoad:'check-sso',  //verifi si l'utilisateur est deja connecté au demarage
      //promiseType: 'native',
    });
    console.log(this.kc.token);


  }
}
