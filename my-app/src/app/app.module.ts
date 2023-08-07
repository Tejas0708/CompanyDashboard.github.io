import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectModule } from './project/project.module';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    ProjectModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
