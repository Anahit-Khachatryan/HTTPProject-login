import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HomeService } from '../home.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService)
  homeService = inject(HomeService);
   users!: any[];

  ngOnInit() {
    this.homeService.getUsers().subscribe(users => {
      this.users = users && users.data
       console.log('users', users)
    }) 
  }

  onLogout() {
   this.authService.logout();
  }


}
