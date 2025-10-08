import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-category-news',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './category-news.html',
  styleUrl: './category-news.css'
})
export class CategoryNews {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false; // closes menu after selection
  }

  categories = [
    { label: 'ಮುಖ್ಯ ಸುದ್ದಿಗಳು', route: 'top-stories' },
    { label: 'ತಾಜಾ ಸುದ್ದಿ', route: 'latest' },
    { label: 'ಕ್ರೀಡೆ', route: 'sports' },
    { label: 'ತಂತ್ರಜ್ಞಾನ', route: 'tech' },
    { label: 'ಚಿತ್ರಗಳು', route: 'movies' },
    { label: 'ವಿಶ್ವ', route: 'world' },
    { label: 'ಆರೋಗ್ಯ', route: 'health' },
    { label: 'ಮನರಂಜನೆ', route: 'entertainment' },
    { label: 'ವಾಹನ', route: 'vehicles' }
  ];
}
