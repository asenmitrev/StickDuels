import { Component, OnInit } from '@angular/core';
import { UiStateStore } from "../../../shared/services/ui-state-store/ui-state-store.service";

@Component({
  selector: 'sd-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  private menuClicked : boolean;

  constructor(private uiStateStore: UiStateStore) {

  }

  ngOnInit() {
  }

  toggleButton() {
    this.uiStateStore.toggleSideMenu();
  }
}
