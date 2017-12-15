// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Effect , Actions } from '@ngrx/effects';
import * as fromAction from '../action/property.action';
import * as fromService from '../../service/property.service';


@Injectable()
export class PropertyEffects {
    constructor(private action$: Actions, private PizzaServices: fromService.PropertyService) {   }

    @ Effect()
    loadProperty$ = this.action$.ofType(fromAction.LOAD_PROPERTY)
        .pipe(
            switchMap((): any => {
                return this.PizzaServices.getProperty().pipe(
                    map(propery => new fromAction.LoadPropertySucess(propery))
                );
            }));
}
