import { ChangeDetectorRef, Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-row-section',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './category-row-section.html',
  styleUrl: './category-row-section.css'
})
export class CategoryRowSection {
  sports: News[] = [];
  movies: News[] = [];
  world: News[] = [];

  constructor(private newsService: NewsService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.newsService.getByCategory('sports', 1, 5)
      .subscribe((res: any) => {
        console.log(res);
        this.sports = res.items;
        this.cdr.detectChanges();
      });
    this.newsService.getByCategory('astrology', 1, 5)
      .subscribe((res: any) => {
        console.log(res);
        this.movies = res.items;
        this.cdr.detectChanges();
      });
    this.newsService.getByCategory('world', 1, 5)
      .subscribe((res: any) => {
        console.log(res);
        this.world = res.items;
        this.cdr.detectChanges();
      });
  }
}
