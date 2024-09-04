import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { publicGuard } from './public.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [publicGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [publicGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
    }
];
