import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage;
  successMessage;
  comptes;

  constructor(private fb: FormBuilder, private compteService: CompteService, private router: Router) { }

  ngOnInit(): void {
    this.initRegisterForm();

    this.compteService.getCompte().subscribe(
      (response)=>{
        // console.log(response);
        this.comptes = response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  initRegisterForm():void{
    this.registerForm = this.fb.group({
      email: this.fb.control('', [ Validators.required, Validators.email]),
      phone: this.fb.control('',Validators.required),
      nom: this.fb.control('',Validators.required),
      prenom: this.fb.control('',Validators.required),
      dateNais: this.fb.control('',Validators.required),
      lieuNais: this.fb.control('',Validators.required),
      adresse: this.fb.control('',Validators.required),
      sexe: this.fb.control('',Validators.required),
      photo: this.fb.control('',Validators.required),
      password: this.fb.control('', [ Validators.required, Validators.minLength(8)]),
      confirmPassword: this.fb.control('', [ Validators.required, Validators.minLength(8)]),
    });
  }


  onSubmit():void{
    // //recupere d'abor les donnee soumis par l'utiisateur
    // const emailU = this.registerForm.get('emailUtilisateur').value;
    // const phoneU = this.registerForm.get('phoneUtilisateur').value;
    // const nomU = this.registerForm.get('nomUtilisateur').value;
    // const prenomU = this.registerForm.get('prenomUtilisateur').value;
    // const dateNaisU = this.registerForm.get('dateNaissance').value;
    // const lieuNaisU = this.registerForm.get('lieuNaissance').value;
    // const adresseU = this.registerForm.get('adresseUtilisateur').value;
    // const sexeU = this.registerForm.get('sexeUtilisateur').value;
    // const photoU = this.registerForm.get('photoUtilisateur').value;
    // const passwordU = this.registerForm.get('passwordUtilisateur').value;

    // const newUser: Users = {adresseMailUtilisateur: emailU,
    //   numeroTelephoneUtilisateur: phoneU,
    //   nomUtilisateur:nomU,
    //   prenomUtilisateur:prenomU,
    //   dateNaissance:dateNaisU,
    //   lieuNaissance:lieuNaisU,
    //   lieuResidence: adresseU,
    //   sexeUtilisateur: sexeU,
    //   photoUtilisateur:photoU,
    //   passwordUtilisateur:passwordU,
    // };

    //console.log(this.registerForm.value);
    this.compteService.saveCompte(this.registerForm.value).subscribe(
      (result)=>{
        console.log("result is here", result);

      }
    )
  }

}
