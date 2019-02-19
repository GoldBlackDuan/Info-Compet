import { Injectable } from '@angular/core';
import { AttribGlob } from 'src/app/attribGlob';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Organisateur } from 'src/app/classe/organisateur';

@Injectable({
  providedIn: 'root',
})
export class OrganisateurService {
    routename='organisateur';
  
  constructor(private http: HttpClient) { }


  getOrganisateurs() {
    return this.http.get(AttribGlob.BASE_API_URL+'/'+this.routename);
  }

  getOrganisateurById(id_Pers: number) {
    return this.http.get<Organisateur>(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }

  createOrganisateur(organisateur: Organisateur) {
    console.log(organisateur);
    return this.http.post(AttribGlob.BASE_API_URL+'/'+this.routename, organisateur);
  }

  updateOrganisateur(organisateur: Organisateur) {
    return this.http.put(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + organisateur.id_Pers, Organisateur);
  }
  updateOrganisateuretat(id_Pers:number,etat:number) {
    return this.http.put(AttribGlob.BASE_API_URL + '/organisateur_etat/'+id_Pers+'/'+etat,Organisateur);
  }
  deleteOrganisateur(id_Pers:number) {
    return this.http.delete(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }

  
  getOrganisateurById2(id_Pers: number) {
    return this.http.get<Organisateur>(AttribGlob.BASE_API_URL + '/route_organisateur_competition/' + id_Pers);
  }

}