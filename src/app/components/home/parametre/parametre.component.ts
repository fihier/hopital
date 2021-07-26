import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';
import { KeycloakSecuService } from 'src/app/services/keycloak-secu.service';
import { CompteService } from 'src/app/services/compte.service';
import { Router } from '@angular/router';
import { ParametreService } from 'src/app/services/parametre.service';


@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  user='';
  mesdonnees : any;
  tempn;
  pressn;
  poul;
  constructor(private keycloakService: KeycloakService,private parametreService: ParametreService, private router: Router) { }

  ngOnInit(): void {
    this.initializeUserOption();

    this.parametreService.getParametre().subscribe(
      (response)=>{
        // console.log(response);
        this.mesdonnees = response;
        this.tempn = (this.mesdonnees.temperature>=38);
        this.pressn = (this.mesdonnees.pression<55 || this.mesdonnees.pression>85);
        this.poul = this.mesdonnees.pression/2;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //public kci = this.keycloakService.getKeycloakInstance();

  private initializeUserOption(): void{
    //this.user = this.kci.tokenParsed.name;
    this.user = this.keycloakService.getUsername();
  }
}
