import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-news-component',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './admin-news-component.html',
  styleUrl: './admin-news-component.css'
})
export class AdminNewsComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  news = {
    title: '',
    description: '',
    category: '',
    link: '',      // ✅ use existing backend field
    image: '',     // ✅ use existing backend field
    isLocal: true
  };

  categories: string[] = [];
  message = '';
  isSuccess = false;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private http: HttpClient, private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getCategories().subscribe({
      next: (res) => (this.categories = res),
      error: (err) => console.error('Failed to load categories', err)
    });
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.previewUrl = reader.result;
      this.news.image = this.previewUrl as string; // base64 string stored temporarily
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    const token = localStorage.getItem('adminToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post('http://localhost:3000/api/news/local', this.news, { headers }).subscribe({
      next: () => {
        this.isSuccess = true;
        this.message = '✅ News added successfully!';
        this.news = { title: '', description: '', category: '', link: '', image: '', isLocal: true };
        this.previewUrl = null;
      },
      error: (err) => {
        this.isSuccess = false;
        this.message = '❌ Failed to add news: ' + (err.error?.message || 'Server error');
      }
    });
  }
}
