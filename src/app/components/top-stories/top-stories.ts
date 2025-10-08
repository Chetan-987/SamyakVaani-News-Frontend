import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-stories',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './top-stories.html',
  styleUrl: './top-stories.css'
})
export class TopStories implements OnInit {
  stories = [
    { title: 'Headline 1', imageUrl: 'https://via.placeholder.com/800x300' },
    { title: 'Headline 2', imageUrl: 'https://via.placeholder.com/800x300' },
    { title: 'Headline 3', imageUrl: 'https://via.placeholder.com/800x300' }
  ];
  current = 0;
  ngOnInit() { setInterval(() => this.next(), 5000); }
  next() { this.current = (this.current + 1) % this.stories.length; }
  prev() { this.current = (this.current - 1 + this.stories.length) % this.stories.length; }
}


