import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  errorSession: boolean = false;
  formLogin!: UntypedFormGroup;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly cookie: CookieService
    ) { }

  ngOnInit(): void {
    this.formLogin = this.initForm();
  }


  initForm(): UntypedFormGroup{
    return this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
    })
  }

  sendLogin(){
    const {email, password} =  this.formLogin.value;
    this.authService.sendCredentials(email, password)
    .subscribe(res => {
      const {data , tokenSession} = res;
      console.log('Sesion exitosa 🎪🎪🎪', tokenSession);
      this.router.navigate(['tracks']);
      // this.cookie.set('token',tokenSession,5, '/'); //TODO: Guardar cookie
    }, err =>{
      this.errorSession = true;
      console.log('Ocurrio algo inesperado', err.status);
    });

  }

}
