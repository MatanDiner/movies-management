import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movies-list/movie/movie.component';
import { ModalComponent } from './components/UI/modal/modal.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieDeleteComponent } from './components/movie-delete/movie-delete.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import {MinuteSecondsPipe} from './pipes/minSec.pipe';
import { BackdropComponent } from './components/UI/backdrop/backdrop.component';
import { SearchComponent } from './components/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieComponent,
    ModalComponent,
    MovieInfoComponent,
    MovieDeleteComponent,
    MovieEditComponent,
    MovieAddComponent,
    MinuteSecondsPipe,
    BackdropComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
