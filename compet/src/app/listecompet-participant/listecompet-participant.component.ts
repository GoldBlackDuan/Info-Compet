import { Component, OnInit } from '@angular/core';
import { Competition } from '../classe/competition';
import { CompetitionService } from 'service/competition.service';
import { CategorieService } from 'service/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listecompet-participant',
  templateUrl: './listecompet-participant.component.html',
  styleUrls: ['./listecompet-participant.component.css']
})
export class ListecompetParticipantComponent implements OnInit {
allCompet;
allCategorie;
  constructor(
    private competitionservice:CompetitionService,
    private categorieservice:CategorieService,
    private router:Router
  ) { }

  ngOnInit() {
    this.categorieservice.getCategories().subscribe(data=>{
      this.allCategorie=data
    })
    this.competitionservice.getCompetitions_voir().subscribe(data1=>{
this.allCompet = data1
    })
  }
  catvalue(categorie:string){
    if(categorie=='Toute'){
      this.competitionservice.getCompetitions_voir().subscribe(data1=>{
        this.allCompet = data1
            })
    }else{
      this.competitionservice.getCompetitions_voir_categorie(categorie).subscribe(data1=>{
        this.allCompet = data1
            })
    }
    
  //  console.log(categorie)
  }


 detail(id_Comp:string){
   console.log("detail"+id_Comp)
   localStorage.removeItem("idComp");
    localStorage.setItem("idComp",id_Comp.toString());
    this.router.navigate(['detail_compet_participant'])

 }
 postuler(id_Comp:string){
  console.log("postuler"+id_Comp)
  this.router.navigate(['postuler_compet'])
 }
}
