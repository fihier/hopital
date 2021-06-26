import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../../app/models/response';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private baseUrl = `${environment.API+'users'+'?API_KEY='+environment.API_KEY}`;
  constructor(private http:HttpClient) {}

  getCompte():Observable<Response>{
    return this.http.get<Response>(this.baseUrl);
  }
  
}
