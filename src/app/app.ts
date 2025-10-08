import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Footer } from "./components/footer/footer";
import { NavTopBar } from './components/nav-top-bar/nav-top-bar';
import { Header } from "./components/header/header";
import { NewsSlider } from './components/news-slider/news-slider';
import { LatestNews } from "./components/latest-news/latest-news";
import { TrendingNews } from "./components/trending-news/trending-news";
import { SportsNews } from "./components/sports-news/sports-news";
import { NewsService } from './services/news.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [NavTopBar, Header, Footer, RouterModule, CommonModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  isLoginPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects.startsWith('/admin');
      }
    });
  }
}
