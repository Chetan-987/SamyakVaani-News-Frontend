import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-trending-news',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './trending-news.html',
  styleUrl: './trending-news.css'
})
export class TrendingNews {
  // newsList: NewsItem[] = [];
  // loading = true;
  // trending = [
  //   { title: 'Trending story 1' },
  //   { title: 'Trending story 2' }
  // ];

  // constructor(private newsService: NewsService) {}
  // ngOnInit() {
  //   this.newsService.getLatestNews().subscribe(data => {
  //     this.newsList = data;
  //     this.loading = false;
  //   });
  // }
  trending: News[] = [];

  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.newsService.getTrending(10).subscribe(data => this.trending = data);
  }
}
