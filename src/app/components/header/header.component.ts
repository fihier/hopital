import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth;
  user = '';
  connect;

  constructor(private keycloakService: KeycloakService, private router: Router) { }

  ngOnInit(): void {
    this.initializeUserOption();
    this.isAuth = this.keycloakService.isLoggedIn
  }

  connexion(){
    this.connect = this.keycloakService.login()
  }

  private initializeUserOption(): void{
    this.user = this.keycloakService.getUsername();
  }


  logout(){
    this.keycloakService.logout('http://localhost:4200');
  }

  isAdmin(){
    this.keycloakService.isUserInRole
  }

}
