import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'service/competition.service';
import { Router } from '@angular/router';
import { Competition } from '../classe/competition';





@Component({
  selector: 'app-listcompetition',
  templateUrl: './listcompetition.component.html',
  styleUrls: ['./listcompetition.component.css']
})
export class ListcompetitionComponent implements OnInit {
  listecompetition;
  id_Comp;
  constructor(private router: Router,
    private competitionservice:CompetitionService
    ) { }

  ngOnInit() {
    // console.log(this.attribGlob.globalEtat);
    this.competitionservice.getCompetitions().subscribe(response=>{
     // console.log(response.json());
      this.listecompetition = response
   });
  }

  detail(id:number){
    localStorage.removeItem("idComp");
    localStorage.setItem("idComp",id.toString());
    this.router.navigate(['detailcompetition'])
  }

 deleteModal(id:string){
   this.id_Comp=id;

 }
 delete(competition : Competition){
  //console.log(id_Comp)
  this.competitionservice.deleteCompetition(competition.id_Comp).subscribe(response=>{
  
  
  });
 }

}
