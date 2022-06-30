import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private readonly cookie:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    try {

      const token = this.cookie.get('token');
      let newRequest = request;
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: 'Bearer '+token,
            CUSTOM_HEADER: 'WizD'
          }
        }
      )
      return next.handle(newRequest);

    } catch (error) {
      console.log('Revento el Interceptor 🛠🛠🛠🛠🛠', error)
      return next.handle(request);
    }

  }
}
