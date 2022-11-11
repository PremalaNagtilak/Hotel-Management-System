import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchDeleteComponent } from './user-search-delete/user-search-delete.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:"",redirectTo:"user",pathMatch:"full"},
  {path:"user",component:UserComponent},
  {path:"user-search-delete",component:UserSearchDeleteComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
