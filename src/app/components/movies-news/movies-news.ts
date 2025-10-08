import { ChangeDetectorRef, Component } from '@angular/core';
import { NewsService, PagedResponse } from '../../services/news.service';
import { News } from '../../models/news.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-movies-news',
  imports: [DatePipe, CommonModule],
  standalone: true,
  templateUrl: './movies-news.html',
  styleUrl: './movies-news.css'
})
export class MoviesNews {
  news: News[] = [];
  page = 1;
  totalPages = 1;
  limit = 12;

  constructor(private newsService: NewsService, private cdr : ChangeDetectorRef) {}

  ngOnInit() {
    this.load(this.page);
  }

  load(page: number) {
     this.newsService.getByCategory('movies', page, this.limit).subscribe((res: PagedResponse<News>) => {
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
