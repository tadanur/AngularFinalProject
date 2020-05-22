import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  petDataService: any;

  getStudents() : void {
    this.studentDataService.getStudents().subscribe((s: Student[]) => (this.students = s));
  }

  deleteStudent(id: number): void {
    this.studentDataService.deleteStudent(id).subscribe(s => this.getStudents());
  }

  constructor(private studentDataService: StudentDataService) { }

  ngOnInit(): void {
    this.getStudents();
  }

}
