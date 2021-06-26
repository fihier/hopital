import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { CompteService } from 'src/app/services/compte.service';
import { Response } from '../../../models/response';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {

  @Input() comptes: Users[];
  comptSub;
  
  constructor(private compteService: CompteService) { }
 

  ngOnInit(): void {
    this.comptSub = this.compteService.getCompte().subscribe(
      (response:Response)=>{
        console.log(response);
        this.comptes = response.result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
