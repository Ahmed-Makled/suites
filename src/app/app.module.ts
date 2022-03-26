import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { HotelFeaturesComponent } from './components/home/hotel-features/hotel-features.component';
import { IndexComponent } from './components/home/index/index.component';
import { OurGalleryComponent } from './components/home/our-gallery/our-gallery.component';
import { OurRoomsComponent } from './components/home/our-rooms/our-rooms.component';
import { PeopleSayComponent } from './components/home/people-say/people-say.component';
import { UpcomingEventsComponent } from './components/home/upcoming-events/upcoming-events.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OurRoomsComponent,
    AboutUsComponent,
    HotelFeaturesComponent,
    OurGalleryComponent,
    UpcomingEventsComponent,
    PeopleSayComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
