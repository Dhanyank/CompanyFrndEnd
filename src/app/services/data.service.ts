import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
  }
  //save data in to a local storage
  // saveDetails() {
  //   localStorage.setItem("database", JSON.stringify(this.database))
  //   if (this.currentAcno) {
  //     localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
  //   }
  //   if (this.currentUser) {
  //     localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
  //   }
  // }

  save(cname:any,adrs: any,web: any,addinput:any,pid:any,features:any,subfeatures:any) {

    const data = {
      cname,
      adrs,
      web,
      addinput,
      pid,features,
      subfeatures
    }
    //register API
    return this.http.post('http://localhost:3000/save', data)
  }
}
