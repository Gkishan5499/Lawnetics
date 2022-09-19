import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:3000/api/contact/"

  creatContact(data:any){
   return this.http.post<any>(this.baseUrl , data);
  }

  getData(){
    return this.http.get<any>(this.baseUrl);
  }

  deleteData(_id:any){
    return this.http.delete<any>(this.baseUrl+_id);
  }

}
