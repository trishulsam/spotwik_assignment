import { Global } from './../resources/global';
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
  
  constructor(private http:HttpClient, private gobal:Global) {
    
   }
    obj = new Global()
  onClick(data){
    this.http.get("http://localhost:3000/users?username="+data).subscribe(temp=>
    {
      Global.user_detail=temp;
      console.log(Global.user_detail,"home caling")
    })
  } 
  ngOnInit(): void {
   
  }

}

