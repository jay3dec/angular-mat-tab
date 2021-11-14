import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import Employee from '../model/employee';

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

  constructor() { }

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

}
