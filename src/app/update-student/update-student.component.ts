import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { CrudserviceService } from '../crudservice.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent  implements OnInit{
emailId:string='';
  student : Student = new Student();
  constructor(private serv : CrudserviceService,private route: ActivatedRoute,private router:Router ){}
ngOnInit(): void {
  this.emailId = this.route.snapshot.params['emailId'];
  this.serv.getStudentByEmailId(this.emailId).subscribe((data)=>{
    this.student=data
    
  })
  
}
onSubmit(){
  this.serv.updateStudent( this.emailId,this.student).subscribe((data)=>{
console.log("Student Data Updated Sucessfully!")
this.router.navigate(['/student-list']);


  })
 
 
 

}
  
}

