
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Property } from '../model/property.model';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
// import { switchMap, , catchError } from 'rxjs/operators';

@Injectable()
export class PropertyService {
    constructor(private http: HttpClient) {}
    getProperty(): Observable<any> {
      // tslint:disable-next-line:prefer-const
      let url = 'http://localhost:3000/test-page';
      console.log(url);
      return this.http.get(url);
          }
    createPizza(payload): Observable<any> {
      return this.http
        .post('../../assets/db.json', payload);
        // .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
    updateProperty(payload): Observable<any> {
      return this.http
        .get('../../assets/db.json', payload);
    }
 }
