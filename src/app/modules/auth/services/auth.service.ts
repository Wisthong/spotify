import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(
    private readonly http: HttpClient,
    private readonly cookie: CookieService
    ) { }

  sendCredentials (email: string, password: string): Observable<any>{
    const body = {
      email: email,
      password: password
    }
    return this.http.post<any>(this.URL+'/auth/login',body)
    .pipe(
      tap(({tokenSession})=>{
        this.cookie.set('token',tokenSession,4,'/');
      })
    )
    ;
  }

}
