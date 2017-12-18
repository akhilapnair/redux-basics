
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Property } from '../model/property.model';

@Injectable()
export class PropertyService {
    constructor(private http: HttpClient) {}
    getProperty(): Observable<any> {
            return this.http
              .get('../../assets/db.json');
              // this.http.get(url).map(res => res.json());
              // .pipe(catchError((error: any) => Observable.throw(error.json())));
          }
    createPizza(payload): Observable<any> {
      return this.http
        .post('../../assets/db.json', payload);
        // .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
 }
