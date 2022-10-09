import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { RequestUpdate } from '../users.models'
import { ResponseUpdate } from '../users.models';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id?: any;
  request: RequestUpdate = {
    first_name: '',
    last_name: '',
    email: ''
  }

  response: ResponseUpdate | undefined;


  constructor(private UserService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.UserService.getUser(this.id)
      .subscribe(request => {
        this.request = {
          first_name: `${request.data.first_name}`,
          last_name: `${request.data.last_name}`,
          email: `${request.data.email} `,
        }
      }, error => console.log(error))
  }

  update() {
    if (this.request.first_name != "" && this.request.last_name != "" && this.request.email) {
      this.UserService.updateUser(this.id, this.request)
        .subscribe((response => {
          this.response = response;
          alert(`User Data update is succesful  ${response.updatedAt}`)
          this._route.navigate([''])
        }), error => console.log(error))
    }

  }

  delete() {
    this.UserService.deleteUser(this.id)
      .subscribe((response => {
        alert(`User data deletion is successful User id:${this.id} `)
        this._route.navigate([''])
      }), error => console.log(error))

  }



}

