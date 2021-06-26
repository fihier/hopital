import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rendez_vous } from '../models/rendez_vous';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

    rdv: Rendez_vous[]=[];
  constructor(private http: HttpClient) { }

  createRdv(newRdv: Rendez_vous){
    return new Promise(
      (resolve,reject)=>{
        const url = `${environment.API+'rendez_vous.php'+'?API_KEY='+environment.API_KEY}` + '&dateRdv=' + newRdv.dateRdv + 
                                                                                              '&heureRdv=' + newRdv.heureRdv;

        this.http.get(url).subscribe(
          (data: Result)=>{
            if(data.status == 200){
              //this.userService.authentifier(newRdv);
              resolve(data.result);
            }else{
              reject(data.message);
            } 
          }, 
          (error)=>{
            reject(error);
          }
        )
      }    
    )
  }
}
