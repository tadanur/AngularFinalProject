import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


const routes: Routes = [
  {
    path: "", 
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "list", 
    component: StudentListComponent
  },
  {
    path: "add", 
    component: StudentAddComponent
  },
  {
    path: "edit/:id", 
    component: StudentEditComponent
  },
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
