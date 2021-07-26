import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  constructor(private http:HttpClient) { }

  public getParametre(){
    return this.http.get("http://192.168.1.140:9090/mesConstantes");
    //{headers: new HttpHeaders({Authorization: 'Bearer '+this.keycloakService.kc.token})})
  }
}
