import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import Employee from '../model/employee';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  employees : Employee[] = [{
    fName : 'Sam',
    lName : 'Johnson',
    age : 32,
    country : 'USA'
  },{
    fName : 'Raghav',
    lName : 'Sharma',
    age : 30,
    country : 'India'
  }];

  constructor(private http : HttpClient) { }

  getEmployees(){
    return of([...this.employees]);
  }

  addEmployee(employee : Employee){
    this.employees.push(employee);
    return of({
      status : 200,
      message : "Data inserted"
    })
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        //delay(3000),
        map((response:any) => {
          return response.map((r:any) => {
            return {
              name : r['name'],
              id : r['id']
            }
          })
        })
      )
  }

}
