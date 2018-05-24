import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstonComponent } from './aston/aston.component';
import { MessageComponent} from './aston/message.component';
import { MessagecorrComponent} from './aston/messagecorr.component';


import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';



// @NgModule est un décorateur
@NgModule({
  declarations: [
    AppComponent,
    AstonComponent,
    MessageComponent,
    MessagecorrComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    // déclaration de formsmodule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
