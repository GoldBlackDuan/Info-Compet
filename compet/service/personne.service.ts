import { Injectable } from '@angular/core';
import { AttribGlob } from 'src/app/attribGlob';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Personne } from 'src/app/classe/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
    routename='personne';
  
  constructor(private http: HttpClient) { }


  getPersonnes() {
    return this.http.get(AttribGlob.BASE_API_URL+'/'+this.routename);
  }

  getPersonneById(id_Pers: number) {
    return this.http.get<Personne>(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }

  createPersonne(personne: Personne) {
    console.log(personne);
    return this.http.post(AttribGlob.BASE_API_URL+'/'+this.routename, personne);
  }

  updatePersonne(personne: Personne) {
    return this.http.put(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + personne.id_Pers, Personne);
  }

  deletePersonne(id_Pers:number) {
    return this.http.delete(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }

 
}