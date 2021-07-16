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
import { CardComponent } from './card/card.component';
import { DatabaseService } from './services/database/database.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent,
		AccountComponent,
		DeckComponent,
		StudyComponent,
		CardComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		NgbModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		{ provide: AuthService, useClass: AuthService },
		{ provide: DatabaseService, useClass: DatabaseService },
		{ provide: 'DB_URL', useValue: 'http://localhost:3000' }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
