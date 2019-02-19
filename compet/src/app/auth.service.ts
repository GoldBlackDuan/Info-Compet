import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  getUserDeatil(pseudo,password){
    return this.http.post('http://localhost:3000/login',{
      pseudo,
      password
    })
  }
}
