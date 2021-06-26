import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-main-abonnement',
  templateUrl: './home-main-abonnement.component.html',
  styleUrls: ['./home-main-abonnement.component.css']
})
export class HomeMainAbonnementComponent implements OnInit {

  abonForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormAbn();
  }

  initFormAbn(){
   this.abonForm = this.fb.group({
    libelle: this.fb.control("", Validators.required),
    date: this.fb.control("", Validators.required),
    departement: this.fb.control("", Validators.required),
    periode: this.fb.control("", Validators.required),
    description: this.fb.control("", Validators.required)
   });
  }

  onSubmit():void{
    console.log(this.abonForm.value);
    
  }

}
