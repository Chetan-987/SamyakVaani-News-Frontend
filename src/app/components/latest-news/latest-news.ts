import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { News } from '../../models/news.model';
import { NewsService } from '../../services/news.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-latest-news',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './latest-news.html',
  styleUrl: './latest-news.css'
})
export class LatestNews {
  latest: News[] = [];

  constructor(private newsService: NewsService, private cdr: ChangeDetectorRef ) {}
  ngOnInit() {
  this.newsService.getLatest(1, 6).subscribe(data => {
    this.latest = data.items;
    console.log(this.latest)
    this.cdr.detectChanges(); 
  });
}

}
