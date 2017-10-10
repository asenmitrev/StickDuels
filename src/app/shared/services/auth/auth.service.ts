import { InventoryService } from './../inventory/inventory.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _isLoggedIn = false;

  constructor(private apiService : ApiService, private inventoryService : InventoryService, private router : Router) { }

  register(username, password) : Promise<any>{
    return this.apiService.updateItem({
      _id: `org.couchdb.user:${username}`,
      name: username,
      password: password,
      roles: [],
      type: 'user'
    }, { dbName: '_users'}).then(res => {
      this.inventoryService.createInventory(res._id);
      return res;
    });
  }

  login(username, password) : Promise<any> {
    return this.apiService.createItem({
      name: username,
      password: password
    },  { dbName: '_session'});
  }

  verify() : Promise<any> {
    return this.apiService.getItem('',  { dbName: '_session', params: { basic: true }}).then( data => {
      this._isLoggedIn = true;
      return true;
    } ).catch( error => false );
  }

  isLoggedIn() : Promise<boolean> {
    return this._isLoggedIn ? new Promise((res, rej) => res(true)) : this.verify();
  }

  logout() : Promise<any> {
    return this.apiService.delete({ dbName: '_session' }).then(data => this.router.navigate(['login']));
  }
}