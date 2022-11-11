import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserRegistrationService } from './user-registration.service';
import {HttpClientModule} from '@angular/common/http';
import { UserSearchDeleteComponent } from './user-search-delete/user-search-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserSearchDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //inserting for RestAPI, import package above
			FormsModule // to insert html forms
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
