import { ApiService } from './shared/services/api/api.service';
import { UiStateStore } from './shared/services/ui-state-store/ui-state-store.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'sd-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private uiStateStore : UiStateStore, private apiService : ApiService){ }

  ngOnInit(){
    // this.apiService.createItem({ _id: 'testitem2', rest: 'stop'}).then(data => console.log(data));
    this.apiService.getItem('da5b1be452392f7308474121e7001366').then((data) => console.log(data));
    // this.apiService.updateItem({_id: 'da5b1be452392f7308474121e7001366', _rev: '3-73c2b0acd120234c7d7d433212807730', newField: 'asen is fucking great3'}).then((data) => console.log(data));
    // this.apiService.deleteItem({ _id: 'testitem2', _rev: '1-16f9e5fe6258f4dd7f8e35e4138de0e1'}).then((data) => console.log(data));
  }
}
