import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyUrlService } from 'src/app/Services/my-url.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {

   constructor(private http:HttpClient, private MyUrl:MyUrlService,private app:AppComponent){}
 username:String;
 password:String;
 WhatToshow:number;


  login()
  {
        this.http.get('http://localhost:8080/login/loginuser'+this.username+'and'+this.password).subscribe(
         (data:any)=>
         {
            console.log(data);
            if(!data)
            {
              window.alert("login Unsuccessfull");
            }
            else
            {
              window.alert("login Successfull");
              this.app.WhatToshow=3;
            }
         }

        );

  }

}
