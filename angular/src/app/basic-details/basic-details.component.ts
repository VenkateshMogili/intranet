import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

	employee: any = {};
  constructor(private service: AuthserviceService) {
  	this.getEmployee();
  }

  ngOnInit() {
  }

  getEmployee(){
  	this.service.getAPI('employees/14').subscribe
  	((response)=>{
  		console.log(response);
  		this.employee = response[0];
  	});
  }

}
