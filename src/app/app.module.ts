import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AmazonComponent } from './amazon/amazon.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MyntraComponent } from './myntra/myntra.component';
import { KfcComponent } from './kfc/kfc.component';
import { PizzahutComponent } from './pizzahut/pizzahut.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SigninComponent,
    ContactComponent,
    AmazonComponent,
    FlipkartComponent,
    MyntraComponent,
    KfcComponent,
    PizzahutComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
