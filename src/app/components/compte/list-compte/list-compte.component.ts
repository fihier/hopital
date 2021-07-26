import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private compteService: CompteService, private router: Router) {
    this.registerForm = this.fb.group({
      email: this.fb.control('', [ Validators.required, Validators.email]),
      phone: this.fb.control('',Validators.required),
      nom: this.fb.control('',Validators.required),
      prenom: this.fb.control('',Validators.required),
      dateNais: this.fb.control('',Validators.required),
      lieuNais: this.fb.control('',Validators.required),
      adresse: this.fb.control('',Validators.required),
      sexe: this.fb.control('',Validators.required),
      //photo: this.fb.control('',Validators.required),
      password: this.fb.control('', [ Validators.required, Validators.minLength(8)]),
      //confirmPassword: this.fb.control('', [ Validators.required, Validators.minLength(8)]),
    });
   }

  ngOnInit(): void {

    this.compteService.getCompte().subscribe(
      (response)=>{
        console.log(response);
        this.comptes = response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  onSubmit():void{


    console.log(this.registerForm.value);
    this.compteService.saveCompte(this.registerForm.value).subscribe(
      (result)=>{
        console.warn("result is here", result);

      }
    )
  }

}
