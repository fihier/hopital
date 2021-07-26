import { KeycloakSecuService } from './keycloak-secu.service';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  //public baseUrl = "http://192.168.1.140:9090/getPatients";
  constructor(private http:HttpClient, private keycloakService: KeycloakSecuService) {}

  public getCompte(){
    return this.http.get("http://192.168.1.140:9090/getPatients")
    //{headers: new HttpHeaders({Authorization: 'Bearer '+this.keycloakService.kc.token})})
  }

  saveCompte(data){
    return this.http.post("http://192.168.1.140:9090/createPatient", data);
  }
}
