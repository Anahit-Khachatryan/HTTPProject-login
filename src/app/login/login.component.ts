import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginDto, LoginResponse } from '../models/auth.model';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  private router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  errors = '';
  constructor() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  onLogin() {
    this.errors = '';
    const loginDto = new LoginDto(this.loginForm.value)
    this.authService.login(loginDto)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (data: LoginResponse) => {
        this.router.navigateByUrl('/home')
      },
      error: (error: HttpErrorResponse) => {
        this.errors = error.error.error
      }
    })
    
  }

}
