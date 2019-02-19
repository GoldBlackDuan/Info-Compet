import { Injectable } from '@angular/core';
import { AttribGlob } from 'src/app/attribGlob';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Participant } from 'src/app/classe/participant';


@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
    routename='participant';
  
  constructor(private http: HttpClient) { }


  getParticipants() {
    return this.http.get(AttribGlob.BASE_API_URL+'/'+this.routename);
  }

  getParticipantById(id_Pers: number) {
    return this.http.get<Participant>(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }

  createParticipant(participant: Participant) {
    console.log(participant);
    return this.http.post(AttribGlob.BASE_API_URL+'/'+this.routename, participant);
  }

  updateParticipant(participant: Participant) {
    return this.http.put(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + participant.id_Pers, Participant);
  }

  updateParticipantetat(id_Pers:number,etat:number) {
    return this.http.put(AttribGlob.BASE_API_URL + '/participant_etat/' + id_Pers+'/'+etat,Participant);
  }
  

  deleteParticipant(id_Pers:number) {
    return this.http.delete(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }
  getParticipantById2(id_Pers: number) {
    return this.http.get<Participant>(AttribGlob.BASE_API_URL + '/route_participant_competition/' + id_Pers);
  }
  
}