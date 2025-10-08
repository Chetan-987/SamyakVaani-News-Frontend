import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { YoutubeFetchVideos } from '../../services/youtube-fetch-videos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videoes-section',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './videoes-section.html',
  styleUrl: './videoes-section.css'
})
export class VideoesSection implements OnInit {
  videos: any[] = [];

  constructor(private yt: YoutubeFetchVideos, private cdr : ChangeDetectorRef) {}

  ngOnInit() {
    this.yt.getVideos().subscribe((data) => {
      console.log("Youtube data is: ", data);
      this.videos = data;
      this.cdr.detectChanges();
    });
  }
}
