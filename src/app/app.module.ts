import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ListComponent } from './contatos/list/list.component';
import { EditComponent } from './contatos/edit/edit.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
