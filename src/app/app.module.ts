import { KeycloakHttpInterceptorService } from './services/keycloak-http-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, APP_INITIALIZER } from '@angular/core';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeuserComponent } from './components/homeuser/homeuser.component';
import { HomemedecinComponent } from './components/homemedecin/homemedecin.component';
import { HomeMainAbonnementComponent } from './components/home/home-main-abonnement/home-main-abonnement.component';
import { ListAbonnementComponent } from './components/home/home-main-abonnement/list-abonnement/list-abonnement.component';
import { CompteComponent } from './components/compte/compte.component';
import { ListCompteComponent } from './components/compte/list-compte/list-compte.component';
import { ParametreComponent } from './components/home/parametre/parametre.component';
import { AuthGuard } from './services/app.guard';
//import { KeycloakSecuService } from './services/keycloak-secu.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './services/app.init';
import { VideoCallComponent } from './components/home/video-call/video-call.component';
import { ChatComponent } from './components/home/chat/chat.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { ListDocteurComponent } from './components/home/list-docteur/list-docteur.component';
import { KeycloakSecuService } from './services/keycloak-secu.service';
import { HomeOrdonanceComponent } from './components/home/home-ordonance/home-ordonance.component';

// export function kcFactory(kcSecuty: KeycloakSecuService){
//   return ()=> kcSecuty.init();
// }

const routes: Routes =[
  {
    component: HomeMainAboutComponent,
    path: 'about'
  },
  {
    component: ParametreComponent,
    canActivate: [AuthGuard],
    path: 'mesParametre'
  },
  {
    component: HomeOrdonanceComponent,
    canActivate: [AuthGuard],
    path: 'ordonance'
  },
  {
    component: VideoCallComponent,
    canActivate: [AuthGuard],
    path: 'teleconsultation'
  },
  {
    component: ChatComponent,
    canActivate: [AuthGuard],
    path: 'chat'
  },
  {
    component: ListCompteComponent,
    path: 'listCompte'
  },
  {
    component: HomeuserComponent,
    data: { roles: ['role_patient'] },
    path: 'homeUser'
  },
  {
    component: HomeAdminComponent,
    data: { roles: ['role_admin'] },
    path: 'homeAmin'
  },
  {
    component: HomemedecinComponent,
    data: { roles: ['role_medecin'] },
    path: 'homeMedecin'
  },
  {
    component: HomeMainServiceComponent,
    path: 'service'
  },
  {
    component: HomeMainAppointmentComponent,
    canActivate: [AuthGuard],
    path: 'rendez-vous'
  },
  {
    component: HomeMainAbonnementComponent,
    canActivate: [AuthGuard],
    path: 'PrendreAbonnement'
  },
  {
    component: ListDocteurComponent,
    canActivate: [AuthGuard],
    path: 'listDocteur'
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
    ListAbonnementComponent,
    CompteComponent,
    ListCompteComponent,
    ParametreComponent,
    VideoCallComponent,
    ChatComponent,
    HomeAdminComponent,
    ListDocteurComponent,
    HomeOrdonanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    KeycloakAngularModule,
    BrowserModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: kcFactory,
    //   multi: true,
    //   deps: [KeycloakSecuService],
    // }
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: KeycloakHttpInterceptorService,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
