import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';
import { ResponseUsers } from './users.models';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers | undefined
  id: any;
  page?: number;
  per_page: number;
  status: any;
  total_pages: any;
  pageNumbers: any;



  constructor(private userService: UserService, public http: HttpClient, private _route: Router) {
    this.per_page = 3;
    this.pageNumbers = []

  }

  ngOnInit(): void {
    this.getUsersFunction ();
  }

  perpageOnChange(event: any): void {
    this.per_page = event.target.value;
    this.getUsersFunction ();
    
  }

  deleteById(event: any): void {
    this.id = event.target.value;
    this.userService.deleteUser(this.id).subscribe((response) => {
      alert(`User data deletion is successful  User id: ${this.id} `)
     }, error => console.log(error))
     this.getUsersFunction ();
  }

  generateButtons(total_pages: number, pagenumbers: any): void {
    pagenumbers = Array.from(Array(this.total_pages).keys()).map(x => x + 1);
    this.pageNumbers = pagenumbers;

  }

  pageButtonClick(event: any): void {
    this.page = event.target.value;
    this.getUsersFunction ();
  }


  getUsersFunction () :void {
    this.userService.getUsers(this.page, this.per_page)
  .subscribe((response => {
    this.responseUsers = response;
    this.total_pages = this.responseUsers.total_pages;
          this.generateButtons(this.total_pages, this.pageNumbers);
  }), error => console.log(error))

}


}
