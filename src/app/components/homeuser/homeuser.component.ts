import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }

}
