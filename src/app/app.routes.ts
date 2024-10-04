import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    { path:'signup',component:SignUpComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }