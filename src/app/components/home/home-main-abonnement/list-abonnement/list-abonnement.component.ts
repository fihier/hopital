import { Component, Input, OnInit } from '@angular/core';
import { AbonnementService } from '../../../../services/abonnement.service';
import { Abonnement } from '../../../../models/abonnement';
import { Response } from '../../../../models/response';

@Component({
  selector: 'app-list-abonnement',
  templateUrl: './list-abonnement.component.html',
  styleUrls: ['./list-abonnement.component.css']
})
export class ListAbonnementComponent implements OnInit {

  @Input() abonnements: Abonnement[];
  abonSub;
  constructor(private abonServ:AbonnementService) { }

  ngOnInit(): void {
    // this.abonSub = this.abonServ.getAbonnement().subscribe(
    //   (response:Response)=>{
    //     //console.log(response);
    //     this.abonnements = response.result;
    //   },
    //   (error)=>{
    //     console.log(error);
    //   }
    // )
  }

}
