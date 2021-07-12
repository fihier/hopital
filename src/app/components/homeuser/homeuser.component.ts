import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
// import { Router } from '@angular/router'

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  user= '';

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOption();
  }

  private initializeUserOption(): void{
    this.user = this.keycloakService.getUsername();
  }

}
