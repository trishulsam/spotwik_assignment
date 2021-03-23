import { RegisterComponent } from './../register/register.component';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public input: any;
  username: string = '';
  password: string = '';
  res:string[]=[];

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    this.http.get("http://localhost:3000/credentials").subscribe(data => {
      for (let index in data) {

        if ((data[index]['username'] == this.username) && (data[index]['password'] == this.password)) {
          this.res.push(this.username)
          this.res.push(data[index]['name'])
          this.router.navigate(['home'])
          break;
        }
        else {
          alert("invalid credentials")
        }
      }
    })
  }

  profileDetail(){
    return this.res;
  }
  ngOnInit(): void {
  }

}
