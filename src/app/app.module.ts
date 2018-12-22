import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { AngularFireAuthModule} from "angularfire2/auth";

import { DatePicker } from '@ionic-native/date-picker/ngx';


const firebase = {
  apiKey: "AIzaSyB3fJHEsqUKszT3hYcXKyzFL6myU-QPO94",
  authDomain: "kunbig-5cd9e.firebaseapp.com",
  databaseURL: "https://kunbig-5cd9e.firebaseio.com",
  projectId: "kunbig-5cd9e",
  storageBucket: "kunbig-5cd9e.appspot.com",
  messagingSenderId: "923227740418"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
