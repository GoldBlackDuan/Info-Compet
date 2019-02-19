import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private Auth: AuthService, private router: Router) { }


  ngOnInit() {
   
  }
  loginUser(event){
    event.preventDefault()
    const target=event.target
    const email =target.querySelector('#email').value
    const password =target.querySelector('#password').value
    this.Auth.getUserDeatil(email,password).subscribe(data => {
      console.log('etat'   +data)
    //   if(data.success){
    //    // this.router.navigate([`./listparticipant`]);
    //   }else{
    //   //  this.router.navigate([`./`]);
    //  //   window.alert(data.message)
    //   }
    })

    console.log(email,password)

  }

 
  inscription(){

    this.router.navigate(['inscription']);

  }



}