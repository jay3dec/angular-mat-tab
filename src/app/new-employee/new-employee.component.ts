import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Employee from '../model/employee';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  
  showEmployee: Boolean = true;
  formGroup! : FormGroup;
  constructor(private formBuilder : FormBuilder, private service : DataService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      fName : [''],
      lName : [''],
      age : [0],
      country : ['']
    })
  }

  saveForm(){
    this.service.addEmployee(this.formGroup.value).subscribe((response) => {
      console.log('response ', response);
    })
  }

}
