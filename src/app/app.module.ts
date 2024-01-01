// App modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// State management
import { StoreModule } from '@ngrx/store';
// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
// Layouts
import { AuthComponent } from './layouts/auth/auth.component';
// Firebase modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// Environment variables
import { environment } from 'src/environments/environment.development';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    //App modules
    AppComponent,
    // Layouts
    AuthComponent,
    HomeComponent,
  ],
  imports: [
    // App modules
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // State management
    StoreModule.forRoot({}, {}),
    // Angular Material
    MatDialogModule,
    // Firebase modules
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
