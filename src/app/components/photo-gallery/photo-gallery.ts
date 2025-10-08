import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { NewsService, PagedResponse } from '../../services/news.service';
import { News } from '../../models/news.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './photo-gallery.html',
  styleUrl: './photo-gallery.css'
})
export class PhotoGallery {
  photos: News[] = [];
  loading = true;
  error: string | null = null;

  constructor(private newsService: NewsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(page = 1, limit = 50) {
    this.loading = true;
    this.error = null;

    this.newsService.getByCategory('photos', page, limit).subscribe({
      next: (res: PagedResponse<News>) => {
        this.photos = res.items;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to fetch photos', err);
        this.error = 'Failed to load photo gallery';
        this.loading = false;
      }
    });
  }
}
