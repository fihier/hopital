import { KeycloakService } from 'keycloak-angular';
import { KeycloakSecuService } from './../../services/keycloak-secu.service';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  user= '';

  constructor(public keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOption();
  }

  public kci = this.keycloakService.getKeycloakInstance()

  private initializeUserOption(): void{
    this.user = this.kci.tokenParsed.name;
  }

}
