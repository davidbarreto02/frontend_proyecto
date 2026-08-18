import { Routes } from '@angular/router';
//Importación del componten login
import {LoginComponent} from './pages/login/login'
import {RegisterComponent} from './pages/register/register'
import {DashboardComponent} from './pages/dashboard/dashboard'
import { UsersComponent } from './pages/users/users';
import { LayoutComponent } from './layout/layout/layout';
import { authGuard } from './guards/auth-guard';
import { ContenidoDinamicoComponent } from './pages/contenido-dinamico/contenido-dinamico';
import { ReservaVuelosComponent } from './pages/vuelos/reserva-vuelos/reserva-vuelos';


//Definición de rutas de la aplicacion 
export const routes: Routes = [
    //Ruta principal de la aplicacion

    {
        path:'',
        component:LayoutComponent,
        canActivate:[
            authGuard
        ],
        children:[
            {
                path:'',
                redirectTo:'dashboard',
                pathMatch:'full'
            },
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'users',
                component:UsersComponent
            },
            {
                path:'contenido',
                component:ContenidoDinamicoComponent
            },
            {
                path:'reservas',
                component:ReservaVuelosComponent
            }
        ]

    },

    {
        path:'login',
        component: LoginComponent
    },
    //Ruta del componente register
    {
        path:'register',
        component: RegisterComponent
    },
  
];
