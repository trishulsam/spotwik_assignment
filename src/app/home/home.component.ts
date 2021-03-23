import { Router } from '@angular/router';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value:string[]=[]
  
  constructor() {
  
   }
    

  ngOnInit(): void {
    // this.login(http,Router)
    // let obj = new this.login[0]
    // console.log(obj)
    
  }

}

