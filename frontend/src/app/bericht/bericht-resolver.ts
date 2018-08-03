import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Bericht } from './bericht.model';
import { Observable } from 'rxjs/Observable';
import { BerichtDataService } from './bericht-data.service';

@Injectable()
export class BerichtResolver implements Resolve<Bericht> {
    constructor(private berichtService: BerichtDataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bericht> {
        return this.berichtService.getBerichtById(route.params['id']);
    }
}
