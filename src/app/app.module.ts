import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from'@angular/common/http';

import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DetailsStudentComponent } from './details-student/details-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    StudentListComponent,
    UpdateStudentComponent,
    DetailsStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
