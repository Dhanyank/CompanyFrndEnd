import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
  }

  feature(){
    return[
      {
        id:1,
        name:"Feature 1"
      },
      {
        id:2,
        name:"Feature 2"
      },
      {
        id:3,
        name:"Feature 3"
      }
      ,
       {
        id:4,
        name:"Feature 4"
      }


    ]
  }
  subfeature()
  {
    return[
      {
        id:1,
        name:"Feature 1.1"
      },
      {
        id:1,
        name:"Feature 1.2"
      },
      {
        id:1,
        name:"Feature 1.3"
      },
      {
        id:2,
        name:"Feature 2.1"
      },
      {
        id:2,
        name:"Feature 2.2"
      },
      {
        id:2,
        name:"Feature 2.3"
      },
      {
        id:3,
        name:"Feature 3.1"
      },
      {
        id:3,
        name:"Feature 3.2"
      },
      {
        id:3,
        name:"Feature 3.3"
      },
      {
        id:4,
        name:"Feature 4.1"
      },
      {
        id:4,
        name:"Feature 4.2"
      },
      {
        id:4,
        name:"Feature 4.3"
      }
    ]
  }


  save(obj:any) {
{
    
    return this.http.post('http://localhost:3000/save', obj)
    
        }
      }
}
