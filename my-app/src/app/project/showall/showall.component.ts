import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Projectdetail } from 'src/Model/Projectdetail';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent {

  allProject:Projectdetail[]=[];

  constructor( private http:HttpClient)
  {
     //Server Call get all project details
      this.http.get('http://localhost:8080/Projectcontroller/gettAllProject').subscribe(
       (data:any)=>
       {
         if(data==null)
         {
          window.alert("Data Not Fetch");
         }
         else
         {
          console.log(data);
          this.allProject=data;
          
         }

       }

      );
  }
  changeStatus(ProjectId:number)
  {
      this.http.get('http://localhost:8080/Projectcontroller/UpdateStatus'+ProjectId+'and'+'Running').subscribe(
        (data:any)=>
        {
           if(!data)
           {
            window.alert("Status Not Updated");
           }
           else
           {
            for(let i=0;i<this.allProject.length;i++)
            {
              if(this.allProject[i].id==ProjectId)
               {
                this.allProject[i].status="Running";
                break;
               }
            }
           }
          }
        );
  }
  changeCloseStatus(ProjectId:number)
  {
    this.http.get('http://localhost:8080/Projectcontroller/UpdateStatus'+ProjectId+'and'+'Closed').subscribe(
        (data:any)=>
        {
           if(!data)
           {
            window.alert("Status Not Updated");
           }
           else
           {
            for(let i=0;i<this.allProject.length;i++)
            {
              if(this.allProject[i].id==ProjectId)
               {
                this.allProject[i].status="Closed";
                break;
               }
            }
           }
          }
        );
  }
  changeCancelStatus(ProjectId:number)
  {
    this.http.get('http://localhost:8080/Projectcontroller/UpdateStatus'+ProjectId+'and'+'Cancel').subscribe(
        (data:any)=>
        {
           if(!data)
           {
            window.alert("Status Not Updated");
           }
           else
           {
            for(let i=0;i<this.allProject.length;i++)
            {
              if(this.allProject[i].id==ProjectId)
               {
                this.allProject[i].status="Cancel";
                break;
               }
            }
           }
          }
        );
  }
}
