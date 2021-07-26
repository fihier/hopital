import { Injectable } from '@angular/core';
import * as Keycloak from 'keycloak-js';
import { KeycloakInstance } from 'keycloak-js';
import { any } from '../../../node_modules/codelyzer/util/function';

declare var keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecuService {

  // public kc: KeycloakInstance;

  // constructor() { }

  // async init(){
  //   console.log("security initialisation ...");
  //   this.kc= new Keycloak({
  //     url:"http://localhost:8080/auth",
  //     realm:"Bocobi2realm",
  //     clientId:"Bocobi2App"
  //   });

  //   await this.kc.init({
  //     //onLoad:'login-required',
  //     onLoad:'check-sso',  //verifi si l'utilisateur est deja connecté au demarage
  //     //promiseType: 'native',
  //     redirectUri: 'http://localhost:4200'
  //   });
  //   console.log(this.kc.token);


  //}
}
