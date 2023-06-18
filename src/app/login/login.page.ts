import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  goToTab2(){
    // Simulating a successful login
    // You can replace this with your actual login logic
    const isLoggedIn = true;

    if (isLoggedIn) {
      // After successful login, navigate to the tabs page
    this.router.navigate(['/tabs']);
    }
  }
  ngOnInit() {
  }

}
