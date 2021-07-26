import { Component, Input, OnInit } from '@angular/core';
import { AbonnementService } from 'src/app/services/abonnement.service';
import { Response } from '../../../../models/response';

@Component({
  selector: 'app-list-abonnement',
  templateUrl: './list-abonnement.component.html',
  styleUrls: ['./list-abonnement.component.css']
})
export class ListAbonnementComponent implements OnInit {

  abonnements;
  abnSub;
  constructor(private abonServ:AbonnementService) { }

  ngOnInit(): void {

    this.abnSub = this.abonServ.getProducts().subscribe(
      (response: Response)=>{
        this.abonnements = response.result;
      },
      (error)=>{
        console.log(error);

      }

    )

    // this.abonServ.getAbonnement().subscribe(
    //   (response)=>{
    //     // console.log(response);
    //     this.abonnements = response;
    //   },
    //   (error)=>{
    //     console.log(error);
    //   }
    // )
  }


}
