import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {from} from 'rxjs';
import { OrganisateurService } from 'service/organisateur.service';


@Component({
  selector: 'app-detailgadmin',
  templateUrl: './detailgadmin.component.html',
  styleUrls: ['./detailgadmin.component.css']
})
export class DetailgadminComponent implements OnInit {
  detailparticipant;
  listinfocompetition;
  id_send;
    constructor(private organisateurservice:OrganisateurService,private route: ActivatedRoute) { }
  
  ngOnInit() {
 //pour recuperer l'id evoyer sur une route  // let id=this.route.snapshot.params['id'];
 this.id_send=localStorage.getItem('id_Pers')

 this.organisateurservice.getOrganisateurById(this.id_send).subscribe(data=>{
  console.log(data);
  this.detailparticipant = data;
 })

 this.organisateurservice.getOrganisateurById2(this.id_send).subscribe(data1=>{
  console.log(data1);
  this.listinfocompetition = data1;
 })

  }

}