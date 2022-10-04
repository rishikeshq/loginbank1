import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
      //this is the pakage if it show anny error 
    //  write this in above import section if error occurs then only import { FormsModule } from '@angular/forms';
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
