import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  em { float:right; color:#E05C65; padding-left:10px; }
  `]
})
export class LoginComponent implements OnInit {
  mouseOverLogin:boolean;
  userName: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.currentUser = null;
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/events']);
  }

}
