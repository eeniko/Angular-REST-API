import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';




const routes: Routes = [ 
  {path:'',component: UsersComponent},
{path:'users/new',component: NewUserComponent},
{path:'users/update/:id',component: UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
