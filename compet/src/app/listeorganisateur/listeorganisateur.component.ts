import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {from} from 'rxjs';
import { OrganisateurService } from 'service/organisateur.service';
import { Router } from '@angular/router';
import { CategorieService } from 'service/categorie.service';
import { Organisateur } from '../classe/organisateur';
import { Personne } from '../classe/personne';
import { PersonneService } from 'service/personne.service';




@Component({
  selector: 'app-listeorganisateur',
  templateUrl: './listeorganisateur.component.html',
  styleUrls: ['./listeorganisateur.component.css']
})
export class ListeorganisateurComponent implements OnInit {

  listorganisateur;
  categorie;
  value;
  max_id;
  id_Pers;
  etat_bool;
  etat_bool_2;
  personne = new Personne();
  organisateur = new Organisateur();


  constructor(private organisateurservice:OrganisateurService,
    private categorieservice:CategorieService,
    private personneservice:PersonneService,
    private router:Router,
    private http:Http) { }


  detail(id:number){
    localStorage.removeItem("id_Pers");
    localStorage.setItem("id_Pers",id.toString());
    this.router.navigate(['detailorganisateur'])
  }

  update(id:number){
    this.organisateurservice.getOrganisateurById(id).subscribe(data=>{
     // console.log(data);
     // this.organisateur = data;

    })


    // this.organisateurservice.updateOrganisateur(this.organisateur).subscribe(data=>{

    // })
  }

  ngOnInit() {
    this.organisateurservice.getOrganisateurs().subscribe(response=>{
      this.listorganisateur = response
   });

 
  }

  onSubmit(){

    this.organisateur.password='123456';
    this.personne.mail_Pers=this.organisateur.mail_Pers;
    this.personne.nom_Pers=this.organisateur.nom_Pers;
    this.personne.password=this.organisateur.password;
    this.personne.prenom_Pers=this.organisateur.prenom_Pers;
    

    this.personneservice.createPersonne(this.personne).subscribe(
      data=>{
          this.http.get('http://localhost:3000/max_personne_id').subscribe(response=>{
        this.value = response.json();
       this.max_id=this.value[0];
        console.log('last_id'+this.max_id.id_Pers);
        /////

        this.organisateur.id_Pers=this.max_id.id_Pers;
        this.organisateur.etat=0;
        console.log(this.organisateur)
        this.organisateurservice.createOrganisateur(this.organisateur).subscribe(
          data=>{
            this.organisateur = new Organisateur();
           // this.router.navigate(['listorganisateur']);
          }
        )
     });
    });
  }


  etatModal(id:string){
    this.id_Pers=id;
 
  }
  etat(organisateur : Organisateur){
    
    this.organisateurservice.getOrganisateurById(organisateur.id_Pers).subscribe(data=>{
     // console.log(data[0].etat)
      this.etat_bool=data[0].etat;
      if(this.etat_bool==1){
      this.etat_bool_2=0;
      this.organisateurservice.updateOrganisateuretat(organisateur.id_Pers,this.etat_bool_2).subscribe(data=>{
        console.log(data[0])
    })
      }else if(this.etat_bool==0){
        this.etat_bool_2=1;
        this.organisateurservice.updateOrganisateuretat(organisateur.id_Pers,this.etat_bool_2).subscribe(data=>{
          console.log(data[0])
      })
      }
   
   
    }) 


  
  }

}
