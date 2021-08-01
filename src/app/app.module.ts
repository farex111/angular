import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
// main page
import { HomepageComponent } from './homepage/homepage.component';
// swiper
import { SwiperModule } from 'swiper/angular';
import { SwiperrComponent } from './swiperr/swiperr.component';
// about
import { AboutComponent } from './about/about.component';
// services
import { ServicesComponent } from './services/services.component';
// contact
import { ContactComponent } from './contact/contact.component';
// news page
import { NewsComponent } from './news/news.component';
import { DetailsComponent } from './news/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SwiperrComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    NewsComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





