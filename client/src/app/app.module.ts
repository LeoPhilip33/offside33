import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { CreateElementsComponent } from './create-elements/create-elements.component';
import { LeagueComponent } from './league/league.component';
import { MapIconComponent } from './map-icon/map-icon.component';
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
import { FakeBorderComponent } from './fake-border/fake-border.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    NewsLetterComponent,
    CreateElementsComponent,
    LeagueComponent,
    MapIconComponent,
    OffresComponent,
    BtbComponent,
    ContactComponent,
    KidBirthdayComponent,
    KidStageComponent,
    PartenariatComponent,
    PubliciteComponent,
    AfterWorkComponent,
    PrivatePartyComponent,
    TournamentComponent,
    SeminarComponent,
    FakeBorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
