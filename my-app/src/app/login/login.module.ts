import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    LoginuserComponent,
    RegisteruserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
   
  ],
  exports:[
    LoginuserComponent,
    RegisteruserComponent

  ]
})
export class LoginModule { }
