import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> dbc0756 (elementos do formulario para cadastro de alunos)

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule
=======
    BrowserModule,
    AppRoutingModule,
    FormsModule
>>>>>>> dbc0756 (elementos do formulario para cadastro de alunos)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
