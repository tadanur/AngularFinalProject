import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  newStudent: Student = new Student();

  addStudent() {
    this.studentDataService.addStudent(this.newStudent).subscribe(s => this.router.navigate(["list"]));
  }
 
  constructor(private studentDataService: StudentDataService, private router: Router) { }

  ngOnInit() {}

}
