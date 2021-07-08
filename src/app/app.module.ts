import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth/auth.service';
import { AccountComponent } from './account/account.component';
import { DeckComponent } from './deck/deck.component';
import { StudyComponent } from './study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AccountComponent,
    DeckComponent,
    StudyComponent
  ],
	imports: [
		AppRoutingModule,
		BrowserModule,
		NgbModule,
		ReactiveFormsModule,
		FormsModule
	],
  providers: [
    { provide: AuthService, useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
