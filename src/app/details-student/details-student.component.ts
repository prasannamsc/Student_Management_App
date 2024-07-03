import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { CrudserviceService } from '../crudservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  emailId:'';
  student:Student
  constructor(private crudservice : CrudserviceService , private activatedroute : ActivatedRoute, private router : Router){}
  backToStudentList(){
    this.router.navigate(['/student-list'])
  }
  ngOnInit(): void {
    this.emailId = this.activatedroute.snapshot.params['emailId'];
    this.student = new Student();
    this.crudservice.getStudentByEmailId(this.emailId).subscribe((data)=>{
      this.student = data

    })
  
   
}
}