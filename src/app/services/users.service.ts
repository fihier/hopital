import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/result';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: Users;
  isAuth = true;
  userSubject = new Subject<Users>();
  nom;
  tof;

  constructor(private http:HttpClient, private router: Router) { }

  emitUser():void {
    this.userSubject.next(this.user);
  }

  authentifier(newUser: Users){
    return new Promise(
      (resolve,reject)=>{
        const url = `${environment.API+'authentifier.php'+'?API_KEY='+environment.API_KEY}` + '&email=' + newUser.adresseMailUtilisateur + 
                                                                                              '&password=' + newUser.passwordUtilisateur;

        this.http.get(url).subscribe(
          (data: Result)=>{
            if(data.status == 200){
              this.user = data.result;
              this.isAuth = true;
              this.emitUser();
              resolve(data.result);
            }else{
              console.log(data.result);
              reject(data.message);
              
            }
          },(error)=>{
            console.log('error :' + error);
            reject(false);
          }
        )
      }
    )
  }

  createUser(newUser: Users){
    return new Promise(
      (resolve,reject)=>{
        const url = `${environment.API+'createUsers.php'+'?API_KEY='+environment.API_KEY}` + '&nom=' + newUser.nomUtilisateur + 
                                                                                              '&prenom=' + newUser.prenomUtilisateur + 
                                                                                              '&adresse=' + newUser.lieuResidence + 
                                                                                              '&sexe=' + newUser.sexeUtilisateur + 
                                                                                              '&phone=' + newUser.numeroTelephoneUtilisateur + 
                                                                                              '&email=' + newUser.adresseMailUtilisateur + 
                                                                                              '&datenais=' + newUser.dateNaissance + 
                                                                                              '&lieunais=' + newUser.lieuNaissance +
                                                                                              '&password=' + newUser.passwordUtilisateur;

        this.http.get(url).subscribe(
          (data: Result)=>{
            if(data.status == 200){
              this.authentifier(newUser);
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

  logout():void{
    this.user = null;
    this.isAuth = false;
    this.userSubject = new Subject<Users>();
    this.router.navigate(['/home']);
  }
}
   