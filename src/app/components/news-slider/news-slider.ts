import { ChangeDetectorRef, Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-slider.html',
  styleUrl: './news-slider.css'
})


export class NewsSlider {
  items: News[] = [];
  idx = 0;

  constructor(private newsService: NewsService, private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.newsService.getLatest(20).subscribe({
      next: (items) => {
        this.items = items.items || [];
        this.idx = 0;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }

  prev() {
    if (this.items.length) {
      this.idx = (this.idx - 1 + this.items.length) % this.items.length;
    }
  }

  next() {
    if (this.items.length) {
      this.idx = (this.idx + 1) % this.items.length;
    }
  }
}

