import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from "@angular/common/http";
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styles: ``
})
export class EmployeeEditComponent {
  @ViewChild('myForm') form!: NgForm;
  constructor(private http: HttpClient,private route: ActivatedRoute) {
    this.show();
    console.log();

  }

  pageTitle: string = "EDIT EMPLOYEE";
  success: string = "";
  error: string = "";
  employee_Data:any;

  // employee: { name: string,email:string,message:string } = { name: "",email: "",message: "" };
  employee:any = "";
  contactErrors: { nameError:string,emailError:string,messageError:string } = { nameError : "", emailError : "", messageError : "" };

  // EmployeeArr: { name:string,email:string,message:string } = { name : "",email : "", message : "" };
  show(){
    let employeeId = this.route.snapshot.paramMap.get('id');
    this.http.get("http://127.0.0.1:8000/api/edit/" + employeeId).subscribe((empData) => {
      // this.employee_Data = empData;
      // console.log(empData.employee);

      this.employee = empData;

    });
  }

  edit(employee:any){
    console.log(employee);
    this.http.get("http://127.0.0.1:8000/api/edit" + "/" + employee.id).subscribe((response) => {
      console.log(response);
    });
  }
  // edit(employee:any){
  //   console.log(employee);
  //   this.http.get("http://127.0.0.1:8000/api/edit" + "/" + employee.id).subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  clearSuccessMessage(){
    this.success = "";
    this.contactErrors.nameError = "";
    this.contactErrors.emailError = "";
    this.contactErrors.messageError = "";
  }
}
