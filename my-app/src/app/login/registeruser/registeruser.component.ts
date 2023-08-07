import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/Model/User';
import { MyUrlService } from 'src/app/Services/my-url.service';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent {

     constructor(private http:HttpClient, private MyUrl:MyUrlService){}
     obj:User=new User();

    Register()
    {
          console.log(this.obj);
          this.http.post('http://localhost:8080/login/Registeruser',this.obj).subscribe(

          (data:any)=>
          {
            if(data==true)
            {
              window.alert("Register Done");
            }
            else
            {
             window.alert("Register Not Done");
            }
          }
          )
    }
}
