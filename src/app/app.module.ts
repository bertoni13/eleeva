import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { StateService } from './api/api';
import { JsonpModule, Jsonp } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ListStatesComponent } from './list-states/list-states.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListStatesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [
    StateService,
    JsonpModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
