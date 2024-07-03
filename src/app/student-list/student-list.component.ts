import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { CrudserviceService } from '../crudservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  emailId: '';

  studentList: Student[]

  constructor( private crudservice : CrudserviceService, private router : Router) { }
  ngOnInit(): void {
    this.getAllStudents();
  }

  private getAllStudents() {
    this.crudservice.getAllStudents().subscribe((data) => {
      this.studentList = data
    })
  }


  updateStudent(emailId: string) {
    this.router.navigate(['/update-student', emailId])
   
  }

  deleteStudent(emailId: string) {
    this.crudservice.deleteStudent(emailId).subscribe((data) => {
      console.log(data);
     /* this.router.navigate(['/']);*/
      window.location.reload()

    });
  }

  studentDetails(emailId: string) {
    this.router.navigate(['/details-student', emailId]);
  }
    
 



}
