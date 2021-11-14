import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-tabs';
  refreshGrid : boolean = false;
  tabIndex : Tabs = Tabs.New_Employees;

  ngOnInit(){
    
  }

  setTab(tab : Tabs){
    this.tabIndex = tab; 
  }

  refreshList($event:any){
    this.refreshGrid = true;
  }

  tabClick(tab:any){
    if(tab.index == 0) this.refreshGrid = false;
  }

}

enum Tabs{
  New_Employees = 0,
  All_Employees = 1
}