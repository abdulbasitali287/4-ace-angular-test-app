import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path:"employee-list",
    component: EmployeeListComponent,
    // children: [
    //   {
    //     path: 'edit/:id',
    //     component: EmployeeEditComponent,
    //   }
    // ]
  },
  {
    path: 'edit/:id',
    component: EmployeeEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
