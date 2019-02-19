import { Component, OnInit } from '@angular/core';
import { Competition } from '../classe/competition';
import { CompetitionService } from 'service/competition.service';
import { CategorieService } from 'service/categorie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listecompetiton-nv',
  templateUrl: './listecompetiton-nv.component.html',
  styleUrls: ['./listecompetiton-nv.component.css']
})
export class ListecompetitonNVComponent implements OnInit {

  allCompet;
  allCategorie;
  detailcompet;
    constructor(
      private competitionservice:CompetitionService,
      private categorieservice:CategorieService,
      private router:Router
    ) { }
  
    ngOnInit() {
      this.categorieservice.getCategories().subscribe(data=>{
        this.allCategorie=data
      })
      this.competitionservice.getCompetitions_voir_categorie_NVall(1).subscribe(data1=>{
     
  this.allCompet = data1
      })
    }
    catvalue(categorie:string){
      if(categorie=='Toute'){
        this.competitionservice.getCompetitions_voir_categorie_NVall(1).subscribe(data1=>{
          this.allCompet = data1
              })
      }else{
        this.competitionservice.getCompetitions_voir_categorie_NV(1,categorie).subscribe(data1=>{
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
   valider(id_Comp:string){
    console.log("postuler"+id_Comp)
    localStorage.removeItem("idComp");
    localStorage.setItem("idComp",id_Comp.toString());
   
    this.router.navigate(['validecompet'])
   }
  }