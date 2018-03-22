import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<object>;
  constructor(private http: HttpClient,
              private homeService: HomeService) { }
  ngOnInit() {
    // this
    //   .userService
    //   .getUsers()
    //   .toPromise()
    //   .then((users) => {
    //     const data = users.json();
    //     this.users = data;
    //     console.log(this.users);
    //   })
    //   .catch((err) => {
    //     console.log('bad request');
    //   });
  }

}
