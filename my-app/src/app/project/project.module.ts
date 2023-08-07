import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ShowallComponent } from './showall/showall.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    AddprojectComponent,
    ShowallComponent
  ],
  imports: [
    CommonModule,
   FormsModule
  ],
  exports:[
    DashboardComponent,
    ShowallComponent,
    AddprojectComponent
  ]
})
export class ProjectModule { }
