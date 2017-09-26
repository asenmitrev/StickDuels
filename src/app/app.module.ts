import { AuthService } from './shared/services/auth/auth.service';
import { ApiService } from './shared/services/api/api.service';
import { UiStateStore } from './shared/services/ui-state-store/ui-state-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { MenuButtonComponent } from "./components/header/menu-button/menu-button.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuButtonComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    UiStateStore,
    ApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
