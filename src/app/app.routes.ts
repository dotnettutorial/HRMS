import { Routes } from '@angular/router';
import { Login } from './login/login';
import { AfterLogin } from './layout/after-login/after-login';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: '',
    component: AfterLogin,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'profile', component: Profile }
    ]
  },
  { path: '**', redirectTo: 'login' }
];