import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(
    private readonly cookie: CookieService,
    private readonly router: Router
    ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession(): boolean{
    try {
      const token: boolean = this.cookie.check('token');
      console.log('Mostrar lo que sucede', token);
      if(token){
        return true;
      }else{
        this.router.navigate(['']);
      }
    } catch (error) {
      console.log('Algo sucedio, no pasas🔴🔴🔴', error)
    }
    return false;
  }

}
