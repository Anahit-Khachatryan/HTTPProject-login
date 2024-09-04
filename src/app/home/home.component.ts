import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService)
  homeService = inject(HomeService);
   

  ngOnInit() {
    this.homeService.getUsers().subscribe(users => {
      
    }) 
  }
  
  onLogout() {
   this.authService.logout();
  }


}
