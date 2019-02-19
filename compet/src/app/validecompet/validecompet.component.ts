import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'service/competition.service';
import { Competition } from '../classe/competition';

@Component({
  selector: 'app-validecompet',
  templateUrl: './validecompet.component.html',
  styleUrls: ['./validecompet.component.css']
})
export class ValidecompetComponent implements OnInit {
id_send;
detailcompet;
listecandidature;
competition= new Competition();
  constructor(
    private competitionservice:CompetitionService
  ) { }

  ngOnInit() {
    this.id_send=localStorage.getItem('idComp')
    console.log(this.id_send)
    this.competitionservice.getCompetitionById(1).subscribe(data1r=>{
      this.detailcompet = data1r
          })
          this.competitionservice.getCompetitions_voir_listecandidature(1).subscribe(data1=>{
            this.listecandidature = data1
                })



  }

  detailpourvlidation(){
    
  }

}
