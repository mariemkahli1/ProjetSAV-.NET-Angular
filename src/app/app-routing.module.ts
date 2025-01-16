import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { ClientsComponent } from 'src/app/components/client/client.component';
import { InterventionsComponent } from 'src/app/components/interventions/interventions.component';
import { ReclamationsComponent } from 'src/app/components/reclamations/reclamations.component';
import { TechniciensComponent } from 'src/app/components/technicien/technicien.component';
import { PieceRechargesComponent } from 'src/app/components/piece-recharges/piece-recharges.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'article', component: ArticlesComponent },
  { path: 'client', component: ClientsComponent },
  { path: 'intervention', component: InterventionsComponent },
  { path: 'reclamation', component: ReclamationsComponent },
  { path: 'technicien', component: TechniciensComponent },
  { path: 'pieces-recharge', component: PieceRechargesComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
