import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'service/admin.service';
import { OrganisateurService } from 'service/organisateur.service';
import { Personne } from '../classe/personne';
import { Admin } from '../classe/admin';
import { Http } from '@angular/http';
import { PersonneService } from 'service/personne.service';



@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent implements OnInit {
  detailadmin;
  data;
  personne = new Personne();
  adminisatrateur = new Admin();
  listorganisateur;
  categorie;
  value;
  max_id;



  constructor(private adminservice:AdminService,
 
 
    private personneservice:PersonneService,
    private router:Router,
    private http:Http) { }


    detailaddmin(id:number){
      this.adminservice.getAdminById(id).subscribe(data=>{
        console.log(data);
        this.detailadmin = data;
       })
    }

  detail(id:number){
    localStorage.removeItem("id_Pers");
    localStorage.setItem("id_Pers",id.toString());
    this.router.navigate(['detailadmin'])
  }

  ngOnInit() {

    this.adminservice.getAdmins().subscribe(response=>{
      this.data = response
   });

 
  }


  onSubmit(){

    this.adminisatrateur.password='admin2019';
    this.personne.mail_Pers=this.adminisatrateur.mail_Pers;
    this.personne.nom_Pers=this.adminisatrateur.nom_Pers;
    this.personne.password=this.adminisatrateur.password;
    this.personne.prenom_Pers=this.adminisatrateur.prenom_Pers;
    

    this.personneservice.createPersonne(this.personne).subscribe(
      data=>{
          this.http.get('http://localhost:3000/max_personne_id').subscribe(response=>{
        this.value = response.json();
       this.max_id=this.value[0];
        console.log('last_id'+this.max_id.id_Pers);
        /////

        this.adminisatrateur.id_Pers=this.max_id.id_Pers;
 
        console.log(this.adminisatrateur)
        this.adminservice.createAdmin(this.adminisatrateur).subscribe(
          data=>{
            this.adminisatrateur = new Admin();
           // this.router.navigate(['listorganisateur']);
          }
        )
     });
    });
  }

}
