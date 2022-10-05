import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers, RequestCreate, ResponseCreate, ResponseUser, ResponseUpdate, RequestUpdate } from './users.models';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(page:any, per_page:any): Observable<ResponseUsers>{
    const _url= `${this.url}/?page=${page}&per_page=${per_page}`
    return this.http.get<ResponseUsers>(_url)
  }
 
  createUser(request:RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url,request)
  }

  getUser(id: string): Observable<ResponseUser>{
    const _url =`${this.url}/${id}`
    return this.http.get<ResponseUser>(_url)
  }

  updateUser(id:string,request:RequestUpdate): Observable<ResponseUpdate>{
    const _url =`${this.url}/${id}`
    return this.http.put<ResponseUpdate>(_url,request)
  }
  deleteUser(id:string): Observable<any>{
    const _url =`${this.url}/${id}`
    return this.http.delete<any>(this.url)
  }
}




