import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  pageTitle: string = "WELCOME TO MY NEW ANGULAR WEBSITE";

  name:string = "";
  email:string = "";
  number: number = 0;

  register()
  {
    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "number": this.number
    };

    this.http.post("http://127.0.0.1:8000/api/store",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
        this.name = '';
        this.email = '';
        this.number = 0;
    });
  }
}
