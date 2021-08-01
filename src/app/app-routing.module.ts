import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {NewsComponent} from './news/news.component';
import {DetailsComponent} from './news/details/details.component'

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'contact', component:ContactComponent},
  {path:'news', component:NewsComponent},
  {path:"news/details/:id", component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
