import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BotellaComponent } from './components/botella/botella.component';
import { LataComponent } from './components/lata/lata.component';
import { BarrilComponent } from './components/barril/barril.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BotellaComponent,
    LataComponent,
    BarrilComponent,
    RegistroComponent,
    IngresoComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
