import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

   getUsers(): Observable<Login[]> {
    return this.http.get<Login[]>('assets/users/users.json');
  }
}
