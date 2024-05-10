import { Component, ViewChild, AfterViewInit, ElementRef  } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from "@angular/common/http";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent{
  @ViewChild('myForm') form!: NgForm;
  constructor(private http: HttpClient) {
    this.show();
  }

  // str: string = "";
  // num: number = 0;
  // bool: boolean = false;
  // arrStr: string[] = [];
  // arrNum: number[] = [];
  // arrAny: any[] = [];


  onCheck(element: any){
    // let formData = new FormData(element);
    // console.log(formData.get('username'));
    // Array.from(element.querySelectorAll('input')).forEach(ele => {
    //   console.log(ele);
    // });

    // console.log(element.parentElement.parentElement.remove());

    interface Point{
      x: number,
      y: string
    }
    let message = (msg: Point) => console.log(msg.y)

    message({ x: 10, y: "john" });
  }

  pageTitle: string = "CONTACT US";
  success: string = "";
  error: string = "";
  employee_Data:any;

  contactErrors: { nameError:string,emailError:string,messageError:string } = { nameError : "", emailError : "", messageError : "" };

  EmployeeArr: { name:string,email:string,message:string } = { name : "",email : "", message : "" };
  show(){
    this.http.get("http://127.0.0.1:8000/api/index").subscribe((empData) => {
      this.employee_Data = empData;
    });
  }


  // getting form second approach without passing template referance into the form submit method
  // if we pass template refernce on submit method then we will get it in function parameters
  // register(){
  //   console.log(this.contactForm);
  // }

  register(form:any)
  {
    let bodyData = {
      "name" : this.EmployeeArr.name,
      "email" : this.EmployeeArr.email,
      "number": this.EmployeeArr.message
    };

    this.http.post("http://127.0.0.1:8000/api/store", bodyData).subscribe((resultData: any) => {

        if (resultData.success == 420) {
          this.EmployeeArr.name = '';
          this.EmployeeArr.email = '';
          this.EmployeeArr.message = "";
          this.success = "We will contact you soon!";
        }
        this.show();
      },
      (error: HttpErrorResponse) => {
        let errors = error.error.errors;
        this.contactErrors.nameError = errors.name;
        this.contactErrors.emailError = errors.email;
        this.contactErrors.messageError = errors.number;
      }
    );
  }

  edit(employee:any){
    console.log(employee);
    this.http.get("http://127.0.0.1:8000/api/edit" + "/" + employee.id).subscribe((response) => {
      console.log(response);
    });
  }
  clearSuccessMessage(){
    this.success = "";
    this.contactErrors.nameError = "";
    this.contactErrors.emailError = "";
    this.contactErrors.messageError = "";
  }
}
