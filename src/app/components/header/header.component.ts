import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.userService.isAuth;
    console.log(this.isAuth);
  }

  logout(){
    this.userService.logout();
    this.isAuth = this.userService.isAuth;
  }


  // redirection():void{
  //   if(this.isAuth = true){
  //     this.router.navigate(['/abonnement']);
  //   }else{
  //     this.router.navigate(['/login']);
  //   }
  // }

}
