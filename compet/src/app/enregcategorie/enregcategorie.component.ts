import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Categorie } from '../classe/categorie';
import { CategorieService } from 'service/categorie.service';

@Component({
  selector: 'app-enregcategorie',
  templateUrl: './enregcategorie.component.html',
  styleUrls: ['./enregcategorie.component.css']
})
export class EnregcategorieComponent implements OnInit {


  categorie = new Categorie();
  id_Pers_ini;
  value;
  id_Categ;
  max_id;
  catedata;

  constructor(private router:Router,
              private http:Http,
              private categorieservice:CategorieService) { }


  ngOnInit() {

    
      this.categorieservice.getCategories().subscribe(response=>{
        // console.log(response.json());
         this.catedata = response
      });
    
  }

  deleteModal(id:string){
   this.id_Categ=id;

 }
 delete(categorie : Categorie){
  //console.log(id_Comp)
  this.categorieservice.deleteCategorie(categorie.id_Categ).subscribe(response=>{
  
  
  });
 }
  onSubmit(){

    this.categorieservice.createCategorie(this.categorie).subscribe(
      data=>{})
  }
}
