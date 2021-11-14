import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Employee from '../model/employee';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {

  allEmployees : Employee[] = [];
  sub! : Subscription;
  @Input() refreshGrid : boolean = false;
  constructor(private service : DataService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.sub = this.service.getEmployees().subscribe((response) => {
      this.allEmployees = response;
    })
  }

  ngOnChanges(){
    if(this.refreshGrid){
      this.getEmployees();
    } 
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
