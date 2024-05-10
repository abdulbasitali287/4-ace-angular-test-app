import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: ``
})
export class EmployeeListComponent {
  constructor(private http: HttpClient,private router: Router) {
    this.show();
  }
  pageTitle:string = "Users List";
employee_Data:any;

// employee listing fetch
show(){
  this.http.get("http://127.0.0.1:8000/api/index").subscribe((empData) => {
    console.log(empData);

    this.employee_Data = empData;
  });
}

goToEditForm(id:any){
  console.log(id);

  this.router.navigateByUrl('edit/' + id);
  // this.router.navigateByUrl('about');
}
}
