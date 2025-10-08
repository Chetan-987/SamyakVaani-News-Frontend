import { Component, ChangeDetectorRef } from '@angular/core';
import { News } from '../../models/news.model';
import { NewsService, PagedResponse } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sports-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sports-news.html',
  styleUrl: './sports-news.css'
})
export class SportsNews {
  news: News[] = [];
    page = 1;
    totalPages = 1;
    limit = 12;
  
    constructor(private newsService: NewsService, private cdr : ChangeDetectorRef) {}
  
    ngOnInit() {
      this.load(this.page);
    }
  
    load(page: number) {
       this.newsService.getByCategory('sports', page, this.limit).subscribe((res: PagedResponse<News>) => {
        console.log(res);
        this.news = res.items;
        this.page = res.page;
        this.totalPages = res.totalPages;
        this.cdr.detectChanges();
      });
    }
  
    nextPage() {
      if (this.page < this.totalPages) this.load(this.page + 1);
    }
  
    prevPage() {
      if (this.page > 1) this.load(this.page - 1);
    }
}
