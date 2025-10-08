import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-nav-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-top-bar.html',
  styleUrl: './nav-top-bar.css'
})
export class NavTopBar implements OnInit, OnDestroy {
  now = new Date();
  timerSub: Subscription | null = null;
  isMobile = window.innerWidth <= 480;

  weather: { temp?: number, icon?: string, city?: string } = { city: 'Bengaluru' };

  socialLinks = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/people/%E0%B2%B8%E0%B2%AE%E0%B3%8D%E0%B2%AF%E0%B2%95%E0%B3%8D-%E0%B2%B5%E0%B2%BE%E0%B2%A3%E0%B2%BF-Samyak-Vaani-24x7-Kannada-News/61577723644208/',
      icon: 'fab fa-facebook-f'
    },
    {
      name: 'twitter',
      url: 'https://x.com/SGoureeditor?t=2Bt5bsBjbD3YdnhYyH-tzA&s=09',
      icon: 'fab fa-twitter'
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/samyakvaani/?igsh=dnluM2Q3Z3RkNDZ3#',
      icon: 'fab fa-instagram'
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com/@SamyakVaani1',
      icon: 'fab fa-youtube'
    }
  ];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Live time update every second
    this.timerSub = interval(1000).subscribe(() => (this.now = new Date()));

    // Fetch weather once (optional)
    this.weatherService.getWeather('Bengaluru').subscribe((w: any) => {
      this.weather = {
        temp: Math.round(w.main.temp),
        icon: w.weather[0].icon,
        city: w.name
      };
    });

    // Watch for window resize to toggle date on small screens
    window.addEventListener('resize', this.handleResize);
  }

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.isMobile = window.innerWidth <= 480;
  };

  getDateString() {
    // Standard short format: Mon, 06 Oct 2025
    return this.now.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  getTimeString() {
    return this.now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
