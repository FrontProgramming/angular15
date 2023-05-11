import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RegistrationComponent } from "./material-forms/registration/registration.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { UserComponent } from './user/user.component';
import { MatLoginComponent } from './material-forms/mat-login/mat-login.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'user', component: UserComponent },
  { path: 'mat-login', component: MatLoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
