import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  private basicUrl="http://localhost:9092/Student"

  constructor( private httpclient : HttpClient) { }

  public addStudent(student : Student):Observable<any>{
    return this.httpclient.post<any>(`${this.basicUrl}/addStudent`,student)
  }
    public getAllStudents():Observable<Student[]>{
   return  this.httpclient.get<Student[]>(`${this.basicUrl}/getAllStudent`)
  }
  public getStudentByEmailId(emailId:string):Observable<any>{
    return this.httpclient.get<any>(`${this.basicUrl}/getStudent?emailId=${emailId}`)
  }
  public updateStudent( emailId:string,student: Student ):Observable<Student>{
    return this.httpclient.put<Student>(`${this.basicUrl}/updateStudent?emailId=${emailId}`,student)
  }
  public deleteStudent(emailId:string):Observable<any>{
    return this.httpclient.delete<any>(`${this.basicUrl}/deleteStudent?emailID=${emailId}`);
  }
  

}
