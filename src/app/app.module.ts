import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './cmps/movie-list/movie-list.component';
import { MoviePreviewComponent } from './cmps/movie-preview/movie-preview.component';
import { HeaderComponent } from './cmps/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieModalComponent } from './cmps/movie-modal/movie-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MoviePreviewComponent,
    HeaderComponent,
    HomeComponent,
    MovieModalComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
