import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  errorSession: boolean = false;
  formLogin!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    ) { }

  ngOnInit(): void {
    this.formLogin = this.initForm();
  }


  initForm(): FormGroup{
    return this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
    })
  }

  sendLogin(){
    const {email, password} =  this.formLogin.value;
    this.authService.sendCredentials(email, password)
    .subscribe(res => {
      console.log('Sesion exitosa');
      this.router.navigate(['tracks']);
    }, err =>{
      this.errorSession = true;
      console.log('Ocurrio algo inesperado', err.status);
    });

  }

}
