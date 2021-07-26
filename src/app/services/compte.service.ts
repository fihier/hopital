import { Users } from 'src/app/models/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) {}

  public getCompte(){
    return this.http.get("http://localhost:9090/getPatient")
  }
  baseUrl = "http://localhost:9090/createPatient";

  saveCompte(data){
    // console.log("service initialiser");

    return this.http.post("this.baseUrl", data);
  }
}
