import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinerComponent } from './shared/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
