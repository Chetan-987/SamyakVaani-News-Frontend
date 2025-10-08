import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsSlider } from '../news-slider/news-slider';
import { LatestNews } from '../latest-news/latest-news';
import { SportsNews } from '../sports-news/sports-news';
import { VideoesSection } from "../videoes-section/videoes-section";
import { CategoryRowSection } from "../category-row-section/category-row-section";
import { Sidebar } from "../sidebar/sidebar";
import { PhotoGallery } from "../photo-gallery/photo-gallery";
import { ReaderPoll } from "../reader-poll/reader-poll";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NewsSlider, LatestNews, VideoesSection, CategoryRowSection, Sidebar, PhotoGallery, ReaderPoll],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
