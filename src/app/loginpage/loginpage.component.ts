import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  //component to view
//  string Interpolation method
  aim="your perfect banking partner"
  //product binding method
  acct="enter the ac number"

  acno=''
  pass=''

  userdetails:any={
    1000:{acno:1000,username:'amal',password:123,balance:2000},
    1001:{acno:1001,username:'joseph',password:123,balance:2000},
    1002:{acno:1002,username:'chandran',password:123,balance:2000},
    1003:{acno:1003,username:'prasad',password:123,balance:2000},

  }
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    var acnum=this.acno
    var psw=this.pass
    let userdetails=this.userdetails
    if(acnum in userdetails){
      if(psw==userdetails[acnum]['password']){
        alert('login successfull')
      }
      else{
        alert('your password is incorrect')
      }
    }
    else{
      alert('user not exist or incorrect ac number')
    }
    
  }
 acchange(event:any){
    this.acno=(event.target.value)
    console.log(this.acno);
 } 

 pswchange(event:any){
  this.pass=event.target.value
 console.log(this.pass);
 
}

}