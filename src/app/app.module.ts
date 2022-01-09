
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componets/home/home.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material/material/material.module';
import { DialogComponent } from './componets/popup/dialog/dialog.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ResultComponent } from './componets/popup/result/result.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './componets/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    ResultComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
