import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home-components/home.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { CommonModule } from '@angular/common';
import {CabinetModule} from './cabinet/cabinet.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout'
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    
  
  
  ],
 
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    CabinetModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    SlickCarouselModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
