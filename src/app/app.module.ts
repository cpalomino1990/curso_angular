import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorsModule } from './contador/contadors.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    ContadorsModule,
    HeroesModule,
    DbzModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
