import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBfcHaz9Bkc4N8cZrzxTCnwpy9ZjTOY3uU",
  authDomain: "testpro-8f08c.firebaseapp.com",
  databaseURL: "https://testpro-8f08c.firebaseio.com",
  projectId: "testpro-8f08c",
  storageBucket: "testpro-8f08c.appspot.com",
  messagingSenderId: "253140486405",
  appId: "1:253140486405:web:b395f65a792243747c4f6c",
  measurementId: "G-B2VP9G0ENS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
