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
const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'signin', component: SigninComponent, title: 'Signin' },
  { path: 'signup', component: SignupComponent, title: 'Signup' },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
