import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guard/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', redirectTo:'auth', pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
    //FIXME: Proteger rutas en ANGULAR
    canActivate:[SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
