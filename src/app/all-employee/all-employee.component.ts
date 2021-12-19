import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import Employee from '../model/employee';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit, OnChanges {

  allEmployees : Employee[] = [];
  sub! : Subscription;
  @Input() data : any = [];
  users:any= [];
  constructor(private service : DataService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.parseData();
  }

  parseData(){
    this.users = this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('param changes ', changes);
      if(changes.data.firstChange) return;
      this.parseData();
  }

  getEmployees(){
    this.sub = this.service.getEmployees().subscribe((response) => {
      this.allEmployees = response;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
