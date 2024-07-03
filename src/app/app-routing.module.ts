import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DetailsStudentComponent } from './details-student/details-student.component';

const routes: Routes = [
  {path:"add-students",component:AddStudentsComponent},
  {path:"student-list",component:StudentListComponent},
  {path:"update-student/:emailId",component:UpdateStudentComponent},
  {path:"details-student/:emailId",component:DetailsStudentComponent},
  {path:"",component:StudentListComponent},

 /* {path: "",redirectTo:'student-list',pathMatch:"full"}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
