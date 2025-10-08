import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-component',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './admin-login-component.html',
  styleUrls: ['./admin-login-component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.post<any>('http://localhost:3000/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.ok) {
          localStorage.setItem('adminToken', res.token);
          console.log("admin token from login page is : ", localStorage.getItem('adminToken'));
          this.router.navigate(['/admin/news']);
        } else {
          this.errorMessage = res.message || 'Invalid username or password';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Server not reachable. Please try again later.';
      }
    });
  }
}
