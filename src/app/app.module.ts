import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JourneysComponent } from './components/journeys/journeys.component';
import { JourneyComponent } from './components/journey/journey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JourneyRatingComponent } from './components/journey-rating/journey-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from './components/filter/filter.component';
import { BasketComponent } from './components/basket/basket.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { StartComponent } from './components/start/start.component';
import { AddJourneyComponent } from './components/add-journey/add-journey.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HistoryComponent } from './components/history/history.component';
import { JourneyDetailsComponent } from './components/journey-details/journey-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ManagerViewComponent } from './components/manager-view/manager-view.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { PersistenceComponent } from './components/persistence/persistence.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneysComponent,
    JourneyComponent,
    JourneyRatingComponent,
    FilterComponent,
    BasketComponent,
    StartComponent,
    AddJourneyComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HistoryComponent,
    JourneyDetailsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ManagerViewComponent,
    UsersListComponent,
    AdminViewComponent,
    UsersListComponent,
    PersistenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
