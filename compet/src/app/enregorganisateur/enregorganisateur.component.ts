import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { OrganisateurService } from 'service/organisateur.service';
import { Organisateur } from '../classe/organisateur';
import { PersonneService } from 'service/personne.service';
import { Personne } from '../classe/personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enregorganisateur',
  templateUrl: './enregorganisateur.component.html',
  styleUrls: ['./enregorganisateur.component.css']
})
export class EnregorganisateurComponent implements OnInit {

  organisateur = new Organisateur();
  personne = new Personne();
  id_Pers_ini;
  value;
  max_id;

  constructor(private router:Router,
              private http:Http,
              private organisateurservice:OrganisateurService,
              private personneservice:PersonneService) { }


  ngOnInit() {

    
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
        console.log(this.max_id.id_Pers);
        /////

        this.organisateur.id_Pers=this.max_id.id_Pers;
        this.organisateur.etat=0;
        this.organisateurservice.createOrganisateur(this.organisateur).subscribe(
          data=>{
            this.router.navigate(['listorganisateur']);
          }
        )
     });
    });
  }
}
