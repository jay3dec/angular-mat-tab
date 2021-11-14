import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  
  showEmployee: Boolean = true;
  formGroup! : FormGroup;
  @Output() refreshList = new EventEmitter();
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
      alert('Data added successfully')
      this.refreshList.emit("refresh");
    })
  }

}
