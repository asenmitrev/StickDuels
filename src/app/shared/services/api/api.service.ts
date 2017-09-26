import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  private apiUrl = 'http://li1657-80.members.linode.com:5984';
  private dbName = 'stickduels';

  constructor(private http: Http) { }

  updateItem(data, dbName? : string) : Promise<any> {
    const url = `${this.apiUrl}/${dbName||this.dbName}/${data._id}`;
    return this.http
      .put(url, JSON.stringify(data))
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  createItem(data, dbName? : string) : Promise<any> {
    const url = `${this.apiUrl}/${dbName||this.dbName}`;
    return this.http
      .post(url, JSON.stringify(data))
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }
  
  getItem(id : string, dbName? : string) : Promise<any> {
    const url = `${this.apiUrl}/${dbName || this.dbName}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  deleteItem(data, dbName? : string) {
    const url = `${this.apiUrl}/${dbName||this.dbName}/${data._id}?rev=${data._rev}`;
    return this.http.delete(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  handleError(error){
    console.log(error);
  }
}
