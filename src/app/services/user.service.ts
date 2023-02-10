import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { api } from '../data/api-url';
import { ServerResponse, User } from '../interfaces/user.inteface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = api.url;
  
  constructor(private http: HttpClient) { }

  searchUserByEmail(title: string, includeDeleted: number){
    const params = new HttpParams()
      .set('title', title)
      .set('includeDeleted', includeDeleted);
    return this.http.get<ServerResponse<User[]>>(this.url + '/user-search', {params})
    .pipe(map(response => response?.result))
  }

  addUser(email: string): Observable<any> {
    return this.http.post<ServerResponse<User>>(this.url + '/add-user', email)
    .pipe(map(response => response?.result))
  }

}
