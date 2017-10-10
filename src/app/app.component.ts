import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from './shared/services/auth/auth.service';
import { UiStateStore } from './shared/services/ui-state-store/ui-state-store.service';
import { Component, ViewEncapsulation, OnInit, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'sd-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private uiStateStore : UiStateStore, private toastr : ToastsManager, vcr: ViewContainerRef){
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(){
  }
}
