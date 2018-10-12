import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { HttpModule} from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { MainService } from './services/main.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PromoComponent } from './promos/promo.component';

import { HomeModule } from './home/home.module';



export const firebaseConfig = {
  apiKey: 'AIzaSyDkXbn2uVR9LvgdvLIpFxczRnSw6sK7q2U',
  authDomain: 'dm-web-f9313.firebaseapp.com',
  databaseURL: 'https://dm-web-f9313.firebaseio.com',
  projectId: 'dm-web-f9313',
  storageBucket: 'dm-web-f9313.appspot.com',
  messagingSenderId: '671565414794'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PromoComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
