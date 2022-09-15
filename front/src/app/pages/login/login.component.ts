import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:'',
  };

  constructor(private snack:MatSnackBar,private login:LoginService) { }

  ngOnInit(): void {
  }
  formSubmit() {
    console.log("login btn clicked");

    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
      alert('username is required!!');
      return;
       
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      alert('password is required!!');
      return;
       
    }
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);
      },
      (error)=>{
        console.log("Error !");
        console.log(error);
        
        
      }
      
    );
  }

}
