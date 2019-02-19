import { Component, OnInit } from '@angular/core';
import { Participant } from '../classe/participant';
import { PersonneService } from 'service/personne.service';
import { ParticipantService } from 'service/participant.service';
import { Personne } from '../classe/personne';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

participant = new Participant();
personne = new Personne();
value;
max_id;
id_Pers;
etat_bool;
etat_bool_2;

  constructor(
    private personneservice:PersonneService,
    private participantservice:ParticipantService,
    private http:Http,
    private router:Router
  ) { }

  ngOnInit() {
  }


  onSubmit(){

    
    this.personne.mail_Pers=this.participant.mail_Pers;
    this.personne.nom_Pers=this.participant.nom_Pers;
    this.personne.password=this.participant.password;
    this.personne.prenom_Pers=this.participant.prenom_Pers;
    

    this.personneservice.createPersonne(this.personne).subscribe(
      data=>{
          this.http.get('http://localhost:3000/max_personne_id').subscribe(response=>{
        this.value = response.json();
       this.max_id=this.value[0];
     //   console.log('last_id'+this.max_id.id_Pers);
        /////

        this.participant.id_Pers=this.max_id.id_Pers;
        this.participant.etat=0;
      //  console.log(this.participant)
        this.participantservice.createParticipant(this.participant).subscribe(
          data=>{
            this.participant = new Participant();
            this.router.navigate(['login']);
          }
        )
     });
    });
  }

}
