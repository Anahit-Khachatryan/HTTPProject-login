import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterDto } from '../models/auth.model';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);

  errors: string = '';

  constructor() {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('this.registerForm', this.registerForm);
      const dto = new RegisterDto(this.registerForm.value);
      this.errors = '';
      this.authService.register(dto)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        // next: (data) => {
        //   this.errors = '';
        //   console.log(data);
        // },
        error: (err: HttpErrorResponse) => {
          this.errors = err.error.error
          console.log('this.errors', this.errors)
          console.log(err);
        }
      });
    }
  }
}
