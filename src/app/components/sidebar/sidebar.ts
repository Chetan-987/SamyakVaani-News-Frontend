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
        this.local_news = items.map(item => ({
          ...item,
          youtubeThumbnail: this.getYouTubeThumbnail(item.link ?? '')
        }));
        this.cdr.detectChanges();
      },
      error: (err) => console.error('❌ Failed to load local news:', err)
    });
  }

  /** 🔹 Extract thumbnail from YouTube link */
  getYouTubeThumbnail(url: string): string | null {
    if (!url) return null;
    const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
  }
}