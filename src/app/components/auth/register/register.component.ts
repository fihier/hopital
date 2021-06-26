import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage;

  constructor(private fb: FormBuilder, private userService:UsersService, private router: Router) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm():void{
    this.registerForm = this.fb.group({
      email: this.fb.control('', [ Validators.required]),
      phone: this.fb.control('', [ Validators.required]),
      nom: this.fb.control('', [ Validators.required]),
      prenom: this.fb.control('', [ Validators.required]),
      dateNais: this.fb.control('', [ Validators.required]),
      lieuNais: this.fb.control('', [ Validators.required]),
      adresse: this.fb.control('', [ Validators.required]),
      sexe: this.fb.control('', [ Validators.required]),
      photo: this.fb.control('', [ Validators.required]),
      password: this.fb.control('', [ Validators.required]),
      confirmPassword: this.fb.control('', [ Validators.required]),
    });
  }


  onSubmit():void{
  //   //recupere d'abor les donnee soumis par l'utiisateur
  //   const emailU = this.registerForm.get('emailUtilisateur').value;
  //   const phoneU = this.registerForm.get('phoneUtilisateur').value;
  //   const nomU = this.registerForm.get('nomUtilisateur').value;
  //   const prenomU = this.registerForm.get('prenomUtilisateur').value;
  //   const dateNaisU = this.registerForm.get('dateNaissance').value;
  //   const lieuNaisU = this.registerForm.get('lieuNaissance').value;
  //   const adresseU = this.registerForm.get('adresseUtilisateur').value;
  //   const sexeU = this.registerForm.get('sexeUtilisateur').value;
  //   const photoU = this.registerForm.get('photoUtilisateur').value;
  //   const passwordU = this.registerForm.get('passwordUtilisateur').value;
  //   const confirmPasswordU = this.registerForm.get('confirmpasswordUtilisateur').value;
  //   const newUser: Users = {emailUtilisateur: emailU, 
  //     phoneUtilisateur: phoneU, 
  //     nomUtilisateur:nomU, 
  //     prenomUtilisateur:prenomU, 
  //     dateNaissance:dateNaisU,
  //     lieuNaissance:lieuNaisU, 
  //     adresseUtilisateur: adresseU,
  //     sexeUtilisateur: sexeU,
  //     photoUtilisateur:photoU,
  //     passwordUtilisateur:passwordU, 
  //     confirmpasswordUtilisateur: confirmPasswordU
  //   };   
  }
  //   this.userService.createUser(newUser)
  //   .then((data)=>{
  //     this.router.navigate(['/home']); //redirige vers la page des utilisateur
  //   })
  //   .catch((error)=>{
  //     this.errorMessage = error;
  //     setTimeout(()=>{
  //       this.errorMessage = null;
  //     },3000)
  //     console.log(error);
  //   })
  //   console.log(newUser);
    
  // }
}
