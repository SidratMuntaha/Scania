import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TransportComponent } from './transport/transport.component';
import { FormsModule } from '@angular/forms';
import { TransportFilterPipe } from './transport-filter.pipe';
import { TransportAddComponent } from './transport-add/transport-add.component';
import { TransportFormComponent } from './transport-form/transport-form.component';
import { TransportEditComponent } from './transport-edit/transport-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TransportComponent,
    TransportFilterPipe,
    TransportAddComponent,
    TransportFormComponent,
    TransportEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
