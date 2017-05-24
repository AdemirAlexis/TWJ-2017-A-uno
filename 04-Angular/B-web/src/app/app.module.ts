import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
//noinspection TypeScriptCheckImport
//import { EstiloComponent } from './Componentes/estilo/estilo.component';
import { EstiloComponent } from './estilo/estilo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EstiloComponent,
    EstiloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
