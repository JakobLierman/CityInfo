import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../user/authentication.service';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.token.length) {
      const clonedRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${this.authService.token}`)
        });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
