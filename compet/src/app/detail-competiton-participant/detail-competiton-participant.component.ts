import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import {from} from 'rxjs';
import { Competition } from '../classe/competition';
import { CompetitionService } from 'service/competition.service';
import { OrganisateurService } from 'service/organisateur.service';


@Component({
  selector: 'app-detail-competiton-participant',
  templateUrl: './detail-competiton-participant.component.html',
  styleUrls: ['./detail-competiton-participant.component.css']
})
export class DetailCompetitonParticipantComponent implements OnInit {
  detailcompetition;
  competition_organisateur;
  nbre_participant;
  id_send;
  competiton = new Competition();
  constructor(private http: Http,
    private router:Router,
    private route: ActivatedRoute,
    private competitionservice:CompetitionService) { }

  ngOnInit() {
    this.id_send=localStorage.getItem('idComp')

    this.competitionservice.getCompetitionById(this.id_send).subscribe(data=>{
       console.log(data);
       this.detailcompetition = data
    });

    this.competitionservice.getOrganisateurById2(this.id_send).subscribe(data1=>{
      console.log(data1)
      this.competition_organisateur = data1
    });


    this.competitionservice.getNbreParticipant(this.id_send).subscribe(data2=>{
      console.log(data2)
      this.nbre_participant = data2
    });
  }
  postuler(){
    console.log("postuler"+this.id_send)
    this.router.navigate(['postuler_compet'])
   }

}
