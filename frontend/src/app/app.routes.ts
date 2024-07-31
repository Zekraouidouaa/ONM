import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MessageComponent } from './message/message.component';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'Admin', component: AdminComponent },
    { path: 'home', component: HomeComponent },
    { path: 'message', component: MessageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to example-page on root
    { path: '**', redirectTo: '/home' } // Redirect any unknown paths to example-page
  ];
  
  