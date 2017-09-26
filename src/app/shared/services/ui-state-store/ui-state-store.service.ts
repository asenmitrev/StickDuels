import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class UiStateStore {
  private _sideMenuOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public readonly sideMenuOpen: Observable<boolean> = this._sideMenuOpen.asObservable();

  constructor() {
  }

  toggleSideMenu(){
    this._sideMenuOpen.next(!this._sideMenuOpen.getValue());
  }

  openSideMenu(){
    this._sideMenuOpen.next(true);
  }

  closeSideMenu(){
    this._sideMenuOpen.next(false);
  }
}
