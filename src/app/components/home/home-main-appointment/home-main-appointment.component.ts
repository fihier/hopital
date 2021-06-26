import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-main-appointment',
  templateUrl: './home-main-appointment.component.html',
  styleUrls: ['./home-main-appointment.component.css']
})
export class HomeMainAppointmentComponent implements OnInit {

  rdvForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.rdvForm = this.fb.group({
      date: this.fb.control("",Validators.required),
      heure: this.fb.control("",Validators.required)
    });
  }

  onSubmit():void{
    console.log(this.rdvForm.value);
    
  }
}
