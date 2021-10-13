import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  
  public getData() {
    return this.http.get<any>(this.url);
  }

  public removeData() {
    let endPoints = "/1"
    return this.http.delete<any>(this.url + endPoints);
  }
}
