import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomeService {
  private _apiUrl = ' https://jsonplaceholder.typicode.com/users ';
  private _apisUrl = ' https://jsonplaceholder.typicode.com/userdetails ';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this._apiUrl)
      .toPromise() ;

  }
  getBadMessage() {
    return this.http.get(this._apisUrl)
      .toPromise();
  }

}
