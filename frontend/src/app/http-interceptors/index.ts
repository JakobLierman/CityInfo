import { BaseUrlInterceptor } from './base-url.interceptors';
import { AuthenticationInterceptor } from './AuthenticationInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }
];

export const basehttpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true
  }
];
