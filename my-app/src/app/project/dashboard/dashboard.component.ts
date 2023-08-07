import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { getProjectDetail } from 'src/Model/getProjectDetail';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   constructor(private http:HttpClient){}
   obj:getProjectDetail = new getProjectDetail();
  WhatToshow:number=0;

  show(num:number)
  {
    this.WhatToshow=num;
  }

  ProjectDetail()
  {
      this.http.get('http://localhost:8080/Projectcontroller/Project').subscribe(
       (Data:any)=>
       {
       if(Data==null)
       {
           window.alert("Not Done");
       }
       else
       {
        console.log(Data);
        this.obj=Data;

       }

       }

      );

  }

}
