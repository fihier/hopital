import { Abonnement } from './../models/abonnement';
import { Response } from './../models/response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  constructor(private http:HttpClient) {}
  baseUrl = "http://localhost:9090/AbonnementList"
  getProducts(): Observable<Response>{
    return this.http.get<Response>(this.baseUrl);
  }

  deleteProduct(abon: Abonnement): Observable<Response>{
    const url = this.baseUrl+"&id="+abon.idAbonnement;
    return this.http.delete<Response>(url);
  }

  editProduct(abon: Abonnement): Observable<Response>{
    const url = this.baseUrl+this.constructURLParams(abon);
    return this.http.get<Response>(url);
  }

  constructURLParams = (object) => {
    let result = '';
    for (const property in object) {
        result += `&${property}=${object[property]}`;
    }
    return result;
  }
}
