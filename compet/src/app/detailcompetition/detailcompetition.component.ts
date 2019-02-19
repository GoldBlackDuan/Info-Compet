import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {from} from 'rxjs';
import { Competition } from '../classe/competition';
import { CompetitionService } from 'service/competition.service';
import { OrganisateurService } from 'service/organisateur.service';

@Component({
  selector: 'app-detailcompetition',
  templateUrl: './detailcompetition.component.html',
  styleUrls: ['./detailcompetition.component.css']
})
export class DetailcompetitionComponent implements OnInit {
detailcompetition;
competition_organisateur;
nbre_participant;
id_send;
competiton = new Competition();
  constructor(private http: Http,
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
}



