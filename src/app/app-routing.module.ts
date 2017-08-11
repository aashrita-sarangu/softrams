import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { TrainingComponent } from './training/training.component';
import { ServicesComponent } from './services/services.component';
import { FoundryComponent } from './foundry/foundry.component';


const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'foundry', component: FoundryComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'news', component: NewsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
