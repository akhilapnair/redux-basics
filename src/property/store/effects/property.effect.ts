// tslint:disable-next-line:eofline
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Effect , Actions } from '@ngrx/effects';
import * as fromAction from '../action/property.action';
import * as fromService from '../../service/property.service';


@Injectable()
export class PropertyEffects {
    constructor(private action$: Actions, private PropertyServices: fromService.PropertyService) {   }

    @Effect()
    loadProperty$ = this.action$.ofType(fromAction.LOAD_PROPERTY)
        .pipe(
            switchMap((): any => {
                return this.PropertyServices.getProperty().pipe(
                    map(property => new fromAction.LoadPropertySucess(property))
                );
            }));



    @Effect()
    CreateProperty$ = this.action$
        .ofType(fromAction.CREATE_PROPERTY)
        .switchMap((payload: any) => this.PropertyServices.createProperty
        .map((user: any) => new fromAction.CreatePropertySucess(user))
        // .do(() => this.router.navigate(['/customerList']))
        .catch(error => Observable.of(new fromAction.CreatePropertyFail(error)))
        );


    @Effect()
    UpdateProperty$ = this.action$.ofType(fromAction.UPDATE_LOCATION).pipe(
        map((action: fromAction.UpdateLocation) => action.payload),
        switchMap( pizza => {
                return this.PropertyServices
                .updateProperty(pizza).pipe(
                    map(updateproperty => new fromAction.UpdateLocationSucess(updateproperty))
                );
            }));
}
