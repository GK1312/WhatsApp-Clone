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

@NgModule({
  declarations: [
    //App modules
    AppComponent,
    // Layouts
    AuthComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
