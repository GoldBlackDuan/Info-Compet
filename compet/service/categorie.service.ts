import { Injectable } from '@angular/core';
import { AttribGlob } from 'src/app/attribGlob';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { HttpModule } from '@angular/http';
import { Categorie } from 'src/app/classe/categorie';
import { Competition } from 'src/app/classe/competition';


@Injectable({
  providedIn: 'root',
})
export class CategorieService {
    routename='categorie';
  
  constructor(private http: HttpClient) { }


  getCategories() {
    return this.http.get(AttribGlob.BASE_API_URL+'/'+this.routename);
  }

  getCategorieById(id_Categ: number) {
    return this.http.get<Categorie>(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Categ);
  }

  createCategorie(categorie: Categorie) {
    console.log(categorie);
    return this.http.post(AttribGlob.BASE_API_URL+'/'+this.routename, categorie);
  }

  updateCategorie(categorie: Categorie) {
    return this.http.put(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + categorie.id_Categ, Competition);
  }

  deleteCategorie(id_Categ:number) {
    return this.http.delete(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Categ);
  }
}