import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Projectdetail } from 'src/Model/Projectdetail';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {

  constructor(private http:HttpClient){}
  statusval="register";
  details:Projectdetail=new Projectdetail();

  Addproject()
  {
       this.details.status=this.statusval;
       //Server Call
       this.http.post('http://localhost:8080/Projectcontroller/addprojectdetail',this.details).subscribe(
       (data:any)=>
       {

        if(!data)
        {
          window.alert("Data Not Added")
        }
        else
        {
          window.alert("Done")
        }
       }
           

       );
  }

}
