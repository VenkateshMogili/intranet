import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';
import { HeaderComponent } from './header/header.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicDetailsComponent,
    UpdateSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
