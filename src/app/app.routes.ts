import { Routes } from '@angular/router';
import { TopStories } from './components/top-stories/top-stories';
import { LatestNews } from './components/latest-news/latest-news';
import { SportsNews } from './components/sports-news/sports-news';
import { TechNews } from './components/tech-news/tech-news';
import { MoviesNews } from './components/movies-news/movies-news';
import { WorldNews } from './components/world-news/world-news';
import { HealthNews } from './components/health-news/health-news';
import { EntertainmentNews } from './components/entertainment-news/entertainment-news';
import { LatestPage } from './components/latest-page/latest-page';
import { Home } from './components/home/home';
import { FinanceNews } from './components/finance-news/finance-news';
import { VehicleNews } from './components/vehicle-news/vehicle-news';
import { AdminLoginComponent } from './components/admin-login-component/admin-login-component';
import { AdminNewsComponent } from './components/admin-news-component/admin-news-component';
import { AllVideoSection } from './components/all-video-section/all-video-section';


export const routes: Routes = [
  { path: 'top-stories', component: Home },
  // { path: 'latest', component: LatestNews },
  { path: 'sports', component: SportsNews },
  { path: 'tech', component: TechNews },
  { path: 'movies', component: MoviesNews },
  { path: 'world', component: WorldNews },
  { path: 'health', component: HealthNews},
  { path: 'entertainment', component: EntertainmentNews},
  { path: 'finance', component: FinanceNews},
  { path: 'vehicles', component: VehicleNews},
  { path: '', component: Home },               // ✅ homepage
  { path: 'latest', component: LatestPage },   // ✅ full latest page
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin/news', component: AdminNewsComponent },
  { path: 'all-videos', component: AllVideoSection}
];
