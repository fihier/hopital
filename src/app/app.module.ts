import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeadercontactComponent } from './components/headercontact/headercontact.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { HomeMainComponent } from './components/home/home-main/home-main.component';
import { HomeMainAboutComponent } from './components/home/home-main-about/home-main-about.component';
import { HomeMainCountComponent } from './components/home/home-main-count/home-main-count.component';
import { HomeMainServiceComponent } from './components/home/home-main-service/home-main-service.component';
import { HomeMainAppointmentComponent } from './components/home/home-main-appointment/home-main-appointment.component';
import { HomeMainDepartmentsComponent } from './components/home/home-main-departments/home-main-departments.component';
import { HomeMainDoctorsComponent } from './components/home/home-main-doctors/home-main-doctors.component';
import { HomeMainFrequentlyComponent } from './components/home/home-main-frequently/home-main-frequently.component';
import { HomeMainTestimonialsComponent } from './components/home/home-main-testimonials/home-main-testimonials.component';
import { HomeMainGalleryComponent } from './components/home/home-main-gallery/home-main-gallery.component';
import { HomeMainContactComponent } from './components/home/home-main-contact/home-main-contact.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeuserComponent } from './components/homeuser/homeuser.component';
import { HomemedecinComponent } from './components/homemedecin/homemedecin.component';
import { HeaderuserComponent } from './components/homeuser/headeruser/headeruser.component';
import { HomeMainAbonnementComponent } from './components/home/home-main-abonnement/home-main-abonnement.component';
import { ListAbonnementComponent } from './components/home/home-main-abonnement/list-abonnement/list-abonnement.component';
import { CompteComponent } from './components/compte/compte.component';
import { ListCompteComponent } from './components/compte/list-compte/list-compte.component';
import { ParametreComponent } from './components/home/parametre/parametre.component';

const routes: Routes =[
  {
    component: HomeMainAboutComponent,
    path: 'about'
  }, 
  {
    component: ParametreComponent,
    path: 'mesParametre'
  },
  {
    component: ListCompteComponent,
    path: 'listCompte'
  }, 
  {
    component: HomeuserComponent,
    path: 'homeUser'
  }, 
  {
    component: HomemedecinComponent,
    path: 'homeMedecin'
  }, 
  {
    component: HomeMainServiceComponent,
    path: 'service'
  },
  {
    component: HomeMainAppointmentComponent,
    path: 'rendez-vous'
  },
  {
    component: HomeMainAbonnementComponent,
    path: 'abonnement'
  },
  {
    component: ListAbonnementComponent,
    path: 'listAbonnement'
  },
  {
    component: HomeMainContactComponent,
    path: 'contact'
  },
  {
    component: HomeMainDepartmentsComponent,
    path: 'departement'
  },
  {
    component: HomeMainDoctorsComponent,
    path: 'doctor'
  },
  {
    component: LoginComponent,
    path: 'login'
  }, 
  {
    component: RegisterComponent,
    path: 'register'
  }, 
  {
    component: HomeComponent,
    path: 'home'
  }, 
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'notFound',
    component: NotFoundComponent
  },
  {
    path:'**',
    redirectTo: 'notFound',
    pathMatch: 'full'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeadercontactComponent,
    HomeBannerComponent,
    HomeMainComponent,
    HomeMainAboutComponent,
    HomeMainCountComponent,
    HomeMainServiceComponent,
    HomeMainAppointmentComponent,
    HomeMainDepartmentsComponent,
    HomeMainDoctorsComponent,
    HomeMainFrequentlyComponent,
    HomeMainTestimonialsComponent,
    HomeMainGalleryComponent,
    HomeMainContactComponent,
    LoginComponent,
    RegisterComponent,
    HomeuserComponent,
    HomemedecinComponent,
    HeaderuserComponent,
    ListAbonnementComponent,
    CompteComponent,
    ListCompteComponent,
    ParametreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
