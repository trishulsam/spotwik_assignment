// import { Global } from './global';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Global   {
   public static user_detail:any;
      
    // constructor(private http: HttpClient, private router: Router) { }

  //   set_detail(data){
  //       Global.user_detail=data;
  //       console.log(Global.user_detail,"set")
  //   }
  //  get_detail(){
  //       console.log(Global.user_detail, "get")
  //       return Global.user_detail;
  //   }
    // constructor(){
    //   return Global.user_detail
    // }
    
  }