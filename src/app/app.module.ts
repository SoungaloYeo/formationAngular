import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { BorderChangeDirective } from './border-change.directive';
import { NavbarComponent } from './navbar.component';
import { PersonneModule } from './personne/personne.module';
import { VilleModule } from './ville/ville.module';
import { DataBindingComponent } from './data-binding.component';
import { InMemoryDataService } from './personne/inmemory-data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    DataBindingComponent,
    BorderChangeDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation:false }),
    HttpClientModule,
    PersonneModule,
    VilleModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
