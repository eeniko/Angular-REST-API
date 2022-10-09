import { Component, OnInit } from '@angular/core';
import { RequestCreate } from '../users.models';
import { ResponseCreate } from '../users.models';
import { UserService } from '../users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})



export class NewUserComponent implements OnInit {

  request: RequestCreate = {
    first_name: '',
    last_name: '',
    email: ''
  }
  response: ResponseCreate | undefined

  constructor(private userService: UserService, private _route: Router) { }

  ngOnInit(): void {
  }

  save() {
    if (this.request.first_name != "" && this.request.last_name && this.request.email != "") {
      this.userService.createUser(this.request)
        .subscribe((response => {
          this.response = response;
          alert(`New user is created at: ' ${response.createdAt}  Id: ${response.id} `);
          this._route.navigate([''])

        }), error => console.log(error));
    }
    else { alert("Please fill in all fields") }

  }

}
