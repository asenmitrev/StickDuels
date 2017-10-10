import { InventoryService } from './shared/services/inventory/inventory.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { TextInputComponent } from './shared/components/text-input/text-input.component';
import { AuthService } from './shared/services/auth/auth.service';
import { ApiService } from './shared/services/api/api.service';
import { UiStateStore } from './shared/services/ui-state-store/ui-state-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, forwardRef } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ToastModule } from 'ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { MenuButtonComponent } from "./components/header/menu-button/menu-button.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { PasswordInputComponent } from './shared/components/password-input/password-input.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuButtonComponent,
    SideMenuComponent,
    TextInputComponent,
    PasswordInputComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    UiStateStore,
    ApiService,
    AuthService,
    AuthGuard,
    InventoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
