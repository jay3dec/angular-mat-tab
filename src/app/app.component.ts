import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-tabs';

  a = 13;

  tabIndex : Tabs = Tabs.New_Employees;

  ngOnInit(){
    
  }

  setTab(tab : Tabs){
    this.tabIndex = tab; 
  }

}

enum Tabs{
  New_Employees = 0,
  All_Employees = 1
}