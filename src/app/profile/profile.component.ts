import { Global } from './../resources/global';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
public user_details:any
  constructor(private global:Global) {
    
   }
   obj = new Global();
  ngOnInit(){
    this.user_details=Global.user_detail;
    console.log(this.user_details,"profile")
  }

}
