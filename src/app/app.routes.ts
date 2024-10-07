import { Routes } from '@angular/router';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { LoginComponent } from './pages/login/login.component';
import { accesoGuard, privadoGuard } from './guards/privado.guard';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'biblioteca',component:BibliotecaComponent,canActivate:[privadoGuard]},
    {path:'usuario',component:UsuarioComponent,canActivate:[privadoGuard]},
    {path:'librosUusuario',component:LibrosComponent,canActivate:[privadoGuard]},
    {path:'editar/:idlibro',component:EditarComponent,canActivate:[privadoGuard]},
    { path: 'libro/:idlibro1', component:DetallesComponent,canActivate:[privadoGuard] },


    {path:'login',component:LoginComponent,canActivate:[accesoGuard]},
    {path:'registro',component:RegistroComponent,canActivate:[accesoGuard]},
    {path:'',redirectTo:'home',pathMatch:'full'},
];
