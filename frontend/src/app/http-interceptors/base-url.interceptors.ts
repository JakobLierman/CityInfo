import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { BACKEND_URL } from "../../environments/environment";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (BACKEND_URL) {
      console.log("before ", `${req.url}`);
      req = req.clone({
        url: `${BACKEND_URL}${req.url}`
      });
      console.log("after ", `${req.url}`);
    }
    console.log("reached prod interceptor");
    return next.handle(req);
  }
}
