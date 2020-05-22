import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  editStudent: Student = new Student();

  updateStudent() {
    this.studentDataService
      .editStudent(this.editStudent)
      .subscribe(s => this.router.navigate(["list"]));
  }

  constructor(private studentDataService: StudentDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.studentDataService
        .getStudent(+param["id"])
        .subscribe(s => (this.editStudent = s));
    });

  }

}
