import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  url = "https://jsonplaceholder.typicode.com/todos";

  constructor(public http: HttpClient) { }

  getData() : Observable<any> {

    return this.http.get(this.url);
  
  }
}
