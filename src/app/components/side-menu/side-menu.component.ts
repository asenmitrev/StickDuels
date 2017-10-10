import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { UiStateStore } from "../../shared/services/ui-state-store/ui-state-store.service";

@Component({
  selector: 'sd-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {
  private sideMenuOpenSubscription: Subscription;

  constructor(private uiStateStore: UiStateStore, private authService : AuthService) { }

  @HostBinding('class.is-open') isMenuOpen: boolean = false;

  ngOnInit() {
    this.sideMenuOpenSubscription = this
      .uiStateStore
      .sideMenuOpen
      .subscribe(isMenuOpen => {
        this.isMenuOpen = isMenuOpen;
      });
  }

  logout() {
    this.authService.logout();
    this.uiStateStore.closeSideMenu()
  }

  ngOnDestroy() {
    this.sideMenuOpenSubscription.unsubscribe();
  }
}
