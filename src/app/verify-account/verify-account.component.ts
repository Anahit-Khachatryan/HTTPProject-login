import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify-account',
  standalone: true,
  imports: [],
  templateUrl: './verify-account.component.html',
  styleUrl: './verify-account.component.css'
})
export class VerifyAccountComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  authService = inject(AuthService);
  
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params)
    const activationToken = this.activatedRoute.snapshot.params['activationToken']
    if (activationToken) {
      this.authService.verifyAccount(activationToken).subscribe(() => {
        this.router.navigate(['/login'])
      })
    } else {
      this.router.navigate(['/register'])
    }
  }
}
