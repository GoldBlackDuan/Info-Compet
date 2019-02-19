import { Injectable } from '@angular/core';
import { AttribGlob } from 'src/app/attribGlob';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Admin } from 'src/app/classe/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
    routename='admin';
  
  constructor(private http: HttpClient) { }


  getAdmins() {
    return this.http.get(AttribGlob.BASE_API_URL+'/'+this.routename);
  }

  getAdminById(id_Pers: number) {
    return this.http.get<Admin>(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }

  createAdmin(admin: Admin) {
    console.log(admin);
    return this.http.post(AttribGlob.BASE_API_URL+'/'+this.routename, admin);
  }

  updateAdmin(admin: Admin) {
    return this.http.put(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + admin.id_Pers, Admin);
  }

  deleteAdmin(id_Pers:number) {
    return this.http.delete(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }
}