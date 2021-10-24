import { NewsLetterComponent } from './news-letter/news-letter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { CreateElementsComponent } from './create-elements/create-elements.component';



const routes: Routes = [
  { path: 'crudadd', component: CreateElementsComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomePageComponent},
  { path: 'connexion', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'news-letter', component: NewsLetterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  
})
export class AppRoutingModule { }
