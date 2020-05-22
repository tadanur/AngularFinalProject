import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  url: string = "http://localhost:3000/students";

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(this.url + "/" + id);
  }

  addStudent(student: Student) : Observable<Student> {
    return this.http.post<Student>(this.url, student);
  }

  deleteStudent(id: number): Observable<Student[]> {
    return this.http.delete<Student[]>(this.url + "/" + id);
  }
  
  editStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.url + "/" + student.id, student);
  }
  constructor(private http: HttpClient) { }
}

