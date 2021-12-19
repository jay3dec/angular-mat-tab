import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-tabs';

  a = 13;

  tabIndex : Tabs = Tabs.New_Employees;
  data :any = [];

  constructor(private service : DataService){}

  ngOnInit(){
    this.fetchUsers();
  }

  fetchUsers(){
    this.service.getUsers().subscribe((response:any) => {
      this.data = this.data.concat(response);
      console.log('got data', this.data);
    })
  }

  setTab(tab : Tabs){
    this.tabIndex = tab; 
  }

  handleAddMore(){
    this.fetchUsers();
  }

}

enum Tabs{
  New_Employees = 0,
  All_Employees = 1
}