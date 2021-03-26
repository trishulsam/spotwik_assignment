import { Global } from './../resources/global';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private http:HttpClient) {}

  onClick(data){
    this.http.get("http://localhost:3000/users?username="+data).subscribe(temp=>
    {
      Global.user_detail=temp;
    })
  } 

  ngOnInit(): void {
  }

}

