import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  user='';
  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOption();
  }

  private initializeUserOption(): void{
    this.user = this.keycloakService.getUsername();
  }
}
