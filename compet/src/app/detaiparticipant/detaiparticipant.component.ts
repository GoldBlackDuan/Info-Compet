import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

import {from} from 'rxjs';
import { ParticipantService } from 'service/participant.service';

@Component({
  selector: 'app-detaiparticipant',
  templateUrl: './detaiparticipant.component.html',
  styleUrls: ['./detaiparticipant.component.css']
})
export class DetaiparticipantComponent implements OnInit {
detailparticipant;
listinfocompetition;
id_send;

  constructor(private http: Http,
    private router: Router,
    private route: ActivatedRoute,
    private participantservice:ParticipantService) { }
  
  ngOnInit() {
    
    // pour recuper l'id d'une route////   let id=this.route.snapshot.params['id'];
    this.id_send=localStorage.getItem('id_Pers')

    this.participantservice.getParticipantById(this.id_send).subscribe(data=>{
      console.log(data)
      this.detailparticipant = data
    })

    this.participantservice.getParticipantById2(this.id_send).subscribe(data1=>{
      console.log(data1)
      this.listinfocompetition = data1
    })

  //   this.http.get('http://localhost:3000/route_participant/'+id).subscribe(response=>{
  //   //  console.log(response.json());
  //     this.detailparticipant = response.json();
  //  });

//    this.http.get('http://localhost:3000/route_participant_competition/'+id).subscribe(response=>{
//     //console.log(response.json());
//     this.listinfocompetition = response.json();
//  });


   
  }

}
