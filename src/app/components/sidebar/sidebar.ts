import { Component, ChangeDetectorRef } from '@angular/core';
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  local_news: News[] = [];

  constructor(private newsService: NewsService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.newsService.getLocalNews().subscribe({
      next: (items) => {
        this.local_news = items;
        console.log('📍 Local news loaded:', this.local_news);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('❌ Failed to load local news:', err)
    });
  }
}
