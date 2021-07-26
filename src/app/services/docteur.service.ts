import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../../app/models/response';

@Injectable({
  providedIn: 'root'
})
export class DocteurService {

  //private baseUrl = `${environment.API+'products'+'?API_KEY='+environment.API_KEY}`;

  constructor(private http:HttpClient) {}

  getAbonnement():Observable<Response>{
    return this.http.get<Response>("this.baseUrl");
  }

  saveCompte(data){
    //return this.http.post(this.baseUrl, data);
    console.log("service", data);
  }
}
