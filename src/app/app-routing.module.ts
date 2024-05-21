import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { AddJourneyComponent } from './components/add-journey/add-journey.component';
import { JourneysComponent } from './components/journeys/journeys.component';
import { StartComponent } from './components/start/start.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HistoryComponent } from './components/history/history.component';
import { JourneyDetailsComponent } from './components/journey-details/journey-details.component';
import {LoginComponent} from "./components/login/login.component";
import {GuestGuard} from "./services/guest.guard.service";
import {SignupComponent} from "./components/signup/signup.component";
import {AdminViewComponent} from "./components/admin-view/admin-view.component";
import {ManagerViewComponent} from "./components/manager-view/manager-view.component";
import {LoginGuard} from "./guards/login.guard";
import {AdminGuard} from "./guards/admin-guard";
import {ManagerGuard} from "./guards/manager-guard";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'journeys', component: JourneysComponent},
  {path: 'admin', component: AdminViewComponent, canActivate: [LoginGuard, AdminGuard]},
  {path: 'manager', component: ManagerViewComponent, canActivate: [LoginGuard, ManagerGuard]},
  {path: 'home', component: StartComponent},
  {path: 'journeys/:id', component: JourneyDetailsComponent},
  {path: 'addnewjourney', component: AddJourneyComponent, canActivate: [LoginGuard, ManagerGuard]},
  {path: 'basket', component: BasketComponent, canActivate: [LoginGuard]},
  {path: 'history', component: HistoryComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [GuestGuard]},
  {path: '**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
