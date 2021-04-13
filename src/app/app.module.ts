import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesListModule } from './moviesList/moviesList.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoviesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
