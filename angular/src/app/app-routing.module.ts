import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';

const routes: Routes = [
{
	path:'employees',
	component: BasicDetailsComponent
},
{
	path:'updateskills/:employee_id',
	component: UpdateSkillsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
