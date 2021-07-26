import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main-service',
  templateUrl: './home-main-service.component.html',
  styleUrls: ['./home-main-service.component.css']
})
export class HomeMainServiceComponent implements OnInit {
  isAuth;
  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.isAuth = this.keycloakService.isLoggedIn;
  }

}
