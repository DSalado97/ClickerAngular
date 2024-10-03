import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonstruoComponent } from './component/monstruo/monstruo.component';
import { JugadorComponent } from './component/jugador/jugador.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MonstruoService } from './services/monstruo.service';
import { JuegoService } from './services/juego.service';
import { JugadorService } from './services/jugador.service';


@NgModule({
  declarations: [
    AppComponent,
    MonstruoComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    MonstruoService,
    JuegoService,
    JugadorService,
    provideHttpClient(withInterceptorsFromDi()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
