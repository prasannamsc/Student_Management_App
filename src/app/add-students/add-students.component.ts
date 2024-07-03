import { Component } from '@angular/core';
import { Student } from '../student';
import { CrudserviceService } from '../crudservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  
student:Student= new Student();
constructor(private serv : CrudserviceService,private router:Router){}
goToStudentList(){
  this.router.navigate(['/student-list']);
}
onSubmit(){
  this.serv.addStudent(this.student).subscribe(data=>{
    console.log(data);
   
    this.router.navigate(['/student-list']);

  });
  console.log(this.student);

  

  }
 

}
