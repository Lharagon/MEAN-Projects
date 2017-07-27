import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
