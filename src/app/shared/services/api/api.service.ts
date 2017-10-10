import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  private apiUrl = 'http://li1657-80.members.linode.com:5984';
  private dbName = 'stickduels';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  updateItem(data, config?) : Promise<any> {
    const url = `${this.apiUrl}/${(config && config.dbName) ? config.dbName : this.dbName}/${data._id}`;
    return this.http
      .put(url, JSON.stringify(data), this.getOptions(config))
      .toPromise()
      .then((response) => response.json());
  }

  createItem(data, config?) : Promise<any> {
    const url = `${this.apiUrl}/${(config && config.dbName) ? config.dbName : this.dbName}`;
    return this.http
      .post(url, JSON.stringify(data), this.getOptions(config))
      .toPromise()
      .then((response) => response.json());
  }
  
  getItem(id : string, config?) : Promise<any> {
    const url = `${this.apiUrl}/${(config && config.dbName) ? config.dbName : this.dbName}/${id}`;
    return this.http.get(url, this.getOptions(config))
      .toPromise()
      .then(response => response.json());
  }

  deleteItem(data, config?) {
    const url = `${this.apiUrl}/${(config && config.dbName) ? config.dbName : this.dbName}/${data._id}?rev=${data._rev}`;
    return this.http.delete(url, this.getOptions(config))
      .toPromise()
      .then(response => response.json());
  }

  delete(config) {
    const url = `${this.apiUrl}/${(config && config.dbName) ? config.dbName : this.dbName}`;
    return this.http.delete(url, this.getOptions(config))
      .toPromise()
      .then(response => response.json());
  }

  getOptions(config){
    return {
      headers: (config && config.headers) ? config.headers : this.headers, 
      withCredentials: true,
      params: (config && config.params) ? config.params : null
    };
  }
}
