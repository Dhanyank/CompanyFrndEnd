import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
  }

  save(obj:any) {

    // const data = {
    //   cname,
    //   adrs,
    //   web,
    //   addinput,
    //   pid,
    //   features,
    //   subfeatures
    //      }
    
    return this.http.post('http://localhost:3000/save', obj)
    
  }
}
