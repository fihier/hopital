import { Component, Input, OnInit } from '@angular/core';
import { Medecin } from 'src/app/models/medecin';
import { DocteurService } from 'src/app/services/docteur.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-docteur',
  templateUrl: './list-docteur.component.html',
  styleUrls: ['./list-docteur.component.css']
})
export class ListDocteurComponent implements OnInit {
  doctForm: FormGroup;
  @Input() docteurs: Medecin[];
  doctSub;
  constructor(private docteurService: DocteurService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();

    this.docteurService.getAbonnement().subscribe(
      (response)=>{
        console.log(response);
        //this.docteurs = response.result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  formInit():void {
    this.doctForm = this.fb.group({
      nom: this.fb.control('',[Validators.required]),
      specialite: this.fb.control('', Validators.required),
      anneeExperience: this.fb.control('', Validators.required),
      phone: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.email),
      adresse: this.fb.control('',Validators.required)
    });
  }

  onSubmit():void{
    const nom = this.doctForm.get('nom').value;
    const specialite = this.doctForm.get('specialite').value;
    const anneeExp = this.doctForm.get('anneeExperience').value;
    const phone = this.doctForm.get('phone').value;
    const email = this.doctForm.get('email').value;
    const adresse = this.doctForm.get('adresse').value;

    // const newUser: Medecin = {nom: nom,
    //   specialite: specialite,
    //   annee_experience:anneeExp,
    //   phone: phone,
    //   email: email,
    //   adresse: adresse,
    // };
    // console.log(newUser);

  }

}
