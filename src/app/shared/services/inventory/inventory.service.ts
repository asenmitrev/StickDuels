import { Inventory } from './../../models/inventory';
import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  constructor(private apiService: ApiService) { }

  getInventory(userId){
    
    // let first = Observable.of(10);
    // first.flatMap((operand1) => {
    //   return Observable.of(operand1 + 10);
    // })
    // .subscribe(res => this.flatMappedStreams = {msg: '10 + 10 = ' + res});
  }

  createInventory(userId){
    this.apiService.createItem(new Inventory(userId));
  }
}
