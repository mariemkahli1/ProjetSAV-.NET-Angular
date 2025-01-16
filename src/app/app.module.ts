import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';  // Module pour <mat-form-field>
import { MatInputModule } from '@angular/material/input';  // Module pour <mat-input>
import { MatButtonModule } from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ClientsComponent } from 'src/app/components/client/client.component';
import { InterventionsComponent } from 'src/app/components/interventions/interventions.component';
import { ReclamationsComponent } from 'src/app/components/reclamations/reclamations.component';
import { TechniciensComponent } from 'src/app/components/technicien/technicien.component';
import { PieceRechargesComponent } from 'src/app/components/piece-recharges/piece-recharges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ClientsComponent,
    InterventionsComponent,
    ReclamationsComponent,
    TechniciensComponent,
    PieceRechargesComponent,
    LoginComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,  // Importer le module pour <mat-form-field>
    MatInputModule,      // Importer le module pour <mat-input>
    MatButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
