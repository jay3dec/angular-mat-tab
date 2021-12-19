import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import Employee from '../model/employee';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit, OnChanges {
  
  showEmployee: Boolean = true;
  formGroup! : FormGroup;
  @Input() data : any = [];
  users:any = [];
  constructor(private formBuilder : FormBuilder, private service : DataService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      fName : [''],
      lName : [''],
      age : [0],
      country : ['']
    });
    this.parseData();
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('param changes ', changes);
      if(changes.data.firstChange) return;
      this.parseData();
  }

  parseData(){
    this.users = this.data;
  }

  saveForm(){
    this.service.addEmployee(this.formGroup.value).subscribe((response) => {
      console.log('response ', response);
    })
  }

}
