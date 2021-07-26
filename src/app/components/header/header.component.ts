import { KeycloakSecuService } from './../../services/keycloak-secu.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakInstance } from 'keycloak-js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth;
  user = '';
  connect;
  roles;
  patient;

  constructor(private keycloakService: KeycloakService, private router: Router) { }

  public kc: KeycloakInstance;

  ngOnInit(): void {
    this.initializeUserOption();
    //this.isAuth = this.keycloakService.kc.authenticated;
    this.isAuth = this.keycloakService.isLoggedIn;
    this.roles = this.keycloakService.isUserInRole('role_admin');
    this.patient = this.keycloakService.isUserInRole('role_patient');
  }
  connexion(){
    this.connect = this.keycloakService.login()
    //this.connect = this.keycloakService.kc.login();
  }

  private initializeUserOption(): void{
    this.user = this.keycloakService.getUsername();
    //this.user = this.keycloakService.kc.clientId
  }
  public kci = this.keycloakService.getKeycloakInstance()
  changePwd(){
    this.kci.accountManagement();
  }

  logout(){
    this.keycloakService.logout('http://localhost:4200');
    //this.keycloakService.kc.logout();
  }

  // isAdmin(){
  //  return this.keycloakService.kc.hasRealmRole('role_admin');
  // }
  // isPatient(){
  //   return this.keycloakService.kc.hasRealmRole('role_patient');
  //  }
}

