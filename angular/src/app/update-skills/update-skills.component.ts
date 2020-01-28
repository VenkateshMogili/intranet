import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-skills',
  templateUrl: './update-skills.component.html',
  styleUrls: ['./update-skills.component.css']
})
export class UpdateSkillsComponent implements OnInit {
	employee: any = {};
	id: any;
  constructor(private service: AuthserviceService,private route: ActivatedRoute,private toastrService: ToastrService) {
  	this.getEmployee();
  	this.route.paramMap.subscribe(params=>{
  		this.id = params.get("employee_id");
  		console.log(this.id);
  	});
  }
  ngOnInit() {
  }

  getEmployee(){
  	this.service.getAPI('employees/14').subscribe
  	((response)=>{
  		this.employee = response[0];
  	});
  }

  updateEmployee(){
  	this.service.updateAPI('employees/'+this.id,this.employee).subscribe
  	((response)=>{
  	if(response['success']==true){
  	this.toastrService.success('Profile Updated Successfully...', 'Success', {
  		timeOut: 3000
	});
  	} else{
  	this.toastrService.error('Something went wrong with frontend', 'Error', {
  		timeOut: 3000
	});
  	}
  	});
  }

}
