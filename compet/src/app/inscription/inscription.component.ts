import { Component, OnInit } from '@angular/core';
import { ParticipantService } from './../participant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  angForm: FormGroup;
  constructor(private participantservice: ParticipantService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      pseudo: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  addCoin(name, firstname, pseudo, mail, password) {
    this.participantservice.addPart(name, firstname, pseudo, mail, password);
  }
  ngOnInit() {
  }

}
