import { ChangeDetectorRef, Component } from '@angular/core';
import { YoutubeFetchVideos } from '../../services/youtube-fetch-videos';
import { CommonModule } from '@angular/common';
import { YouTubeService, YouTubeVideo } from '../../services/youtube';

@Component({
  selector: 'app-all-video-section',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './all-video-section.html',
  styleUrl: './all-video-section.css'
})
export class AllVideoSection {
    videos: YouTubeVideo[] = [];
  nextPageToken: string | null = null;
  prevPageToken: string | null = null;
  page = 1;
  totalPages = 1;
  maxResults = 12;
  loading = false;

  constructor(
    private ytService: YouTubeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos(pageToken: string = '') {
    this.loading = true;
    this.ytService.getVideos('@SamyakVaani1', pageToken, this.maxResults)
      .subscribe({
        next: res => {
          this.videos = res.videos;
          this.nextPageToken = res.nextPageToken || null;
          this.prevPageToken = res.prevPageToken || null;
          this.cdr.detectChanges();
          this.loading = false;
        },
        error: err => {
          console.error(err);
          this.loading = false;
        }
      });
  }

  nextPage() {
    if (this.nextPageToken) {
      this.page++;
      this.loadVideos(this.nextPageToken);
    }
  }

  prevPage() {
    if (this.prevPageToken) {
      this.page--;
      this.loadVideos(this.prevPageToken);
    }
  }
}
