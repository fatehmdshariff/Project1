import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(option: string) {
    if (option === 'A') {
      this.router.navigate(['/form-x']); // Navigate to Form X page
    } else if (option === 'B') {
      this.router.navigate(['/form-y']); // Navigate to Form Y page
    }
  }
}
