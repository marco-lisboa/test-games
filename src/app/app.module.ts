import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SwiperModule } from "swiper/angular";
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { TestModule } from './components/test/test.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TestComponent
   ],
  imports: [
    BrowserModule,
    SwiperModule,
    AppRoutingModule,
    TestModule,
    FormsModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
