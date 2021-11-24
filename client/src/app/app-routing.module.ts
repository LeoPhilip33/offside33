import { NewsLetterComponent } from './news-letter/news-letter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { OffresComponent } from './offres/offres.component';
import { BtbComponent } from './btb/btb.component';
import { ContactComponent } from './contact/contact.component';
import { KidBirthdayComponent } from './kid-birthday/kid-birthday.component';
import { KidStageComponent } from './kid-stage/kid-stage.component';
import { PartenariatComponent } from './partenariat/partenariat.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { AfterWorkComponent } from './after-work/after-work.component';
import { PrivatePartyComponent } from './private-party/private-party.component';
import { TournamentComponent } from './tournament/tournament.component';
import { SeminarComponent } from './seminar/seminar.component';
import { AuthGuard } from './auth.guard';
import { LeagueComponent } from './league/league.component';
import { CreateElementsComponent } from './create-elements/create-elements.component';



const routes: Routes = [
  { path: 'crudadd', component: CreateElementsComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'league', component: LeagueComponent},
  { path: 'offres', component: OffresComponent},
  { path: 'btb', component: BtbComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'kid-birthday', component: KidBirthdayComponent},
  { path: 'kid-stage', component: KidStageComponent},
  { path: 'partenariat', component: PartenariatComponent},
  { path: 'publicite', component: PubliciteComponent},
  { path: 'after-work', component: AfterWorkComponent},
  { path: 'private-party', component: PrivatePartyComponent},
  { path: 'tournament', component: TournamentComponent},
  { path: 'seminar', component: SeminarComponent},
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
