import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router' ;
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import {from} from 'rxjs';
import { CompetitionService } from 'service/competition.service';
import { CategorieService } from 'service/categorie.service';
import { Competition } from '../classe/competition';


@Component({
  selector: 'app-enregcompetition',
  templateUrl: './enregcompetition.component.html',
  styleUrls: ['./enregcompetition.component.css']
})
export class EnregcompetitionComponent implements OnInit {
  categorie;
  libelle_categ;
  // formGroupcompetition: FormGroup;

 
  competition  = new Competition();
  constructor(
    private router: Router,
    private competitionservice:CompetitionService,
    private categorieservice:CategorieService) { }

  ngOnInit() {
this.categorieservice.getCategories().subscribe(response=>{this.categorie = response});

  }

  onSubmit(){
    this.categorieservice.getCategorieById(this.competition.id_Categ).subscribe(response=>{
      this.libelle_categ=response[0]
    });
      
      
  
    // this.competition.categorie=this.libelle_categ;
   //  console.log( this.libelle_categ);
      this.competitionservice.createCompetition(this.competition).subscribe(
        data=>{
          //this.router.navigate(['listcompetition']);
        }
      )
  }

}
