import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

  addPart(name, firstname, pseudo, mail, password) {
    const uri = 'http://localhost:4000/inscription/add';
    const obj = {
      name: name,
      firstname: firstname,
      pseudo: pseudo,
      mail: mail,
      password: password,
    };
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
}