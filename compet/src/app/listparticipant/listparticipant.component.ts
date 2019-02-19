import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import {from, Observable} from 'rxjs';
import { ParticipantService } from 'service/participant.service';
import { Router } from '@angular/router';
import { Participant } from '../classe/participant';


@Component({
  selector: 'app-listparticipant',
  templateUrl: './listparticipant.component.html',
  styleUrls: ['./listparticipant.component.css']
})
export class ListparticipantComponent implements OnInit {
data;
id_Pers;
etat_bool;
etat_bool_2;
participant = new Participant();



  constructor(private participantservice:ParticipantService,
  
    private router:Router) { }

  detail(id:number){
    localStorage.removeItem("id_Pers");
    localStorage.setItem("id_Pers",id.toString());
    this.router.navigate(['detailparticipant'])
  }
  ngOnInit() {
    this.participantservice.getParticipants().subscribe(response=>{
      this.data = response
   });
  }


  etatModal(id:string){
    this.id_Pers=id;
 
  }

  etat(participant : Participant){
    
    this.participantservice.getParticipantById(participant.id_Pers).subscribe(data=>{
     // console.log(data[0].etat)
      this.etat_bool=data[0].etat;
      if(this.etat_bool==1){
      this.etat_bool_2=0;
      this.participantservice.updateParticipantetat(participant.id_Pers,this.etat_bool_2).subscribe(data=>{
        console.log(data[0])
    })
      }else if(this.etat_bool==0){
        this.etat_bool_2=1;
        this.participantservice.updateParticipantetat(participant.id_Pers,this.etat_bool_2).subscribe(data=>{
          console.log(data[0])
      })
      }
   
   
    }) 


  
  }
}
