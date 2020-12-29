import { PizzahutComponent } from './pizzahut/pizzahut.component';
import { MyntraComponent } from './myntra/myntra.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { KfcComponent } from './kfc/kfc.component';
import { ContactComponent } from './contact/contact.component';
import { AmazonComponent } from './amazon/amazon.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'amazon', component: AmazonComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'kfc', component: KfcComponent },
  { path: 'flipkart', component: FlipkartComponent },
  { path: 'myntra', component: MyntraComponent },
  { path: 'pizzahut', component: PizzahutComponent },
  { path: '**' , component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
