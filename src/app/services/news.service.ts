// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { News } from '../models/news.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsService {
//   private base = '/api/news';

//   constructor(private http: HttpClient) {}

//   getLatest(limit = 10, category?: string): Observable<News[]> {
//     const qs = `?limit=${limit}` + (category ? `&category=${encodeURIComponent(category)}` : '');
//     return this.http.get<{ ok: boolean, count: number, items: News[] }>(`${this.base}/latest${qs}`)
//       .pipe(map(res => res.items));
//   }

//   getByCategory(category: string, page=1, limit=20) {
//     return this.http.get<{ page:number, limit:number, total:number, items: News[] }>(
//       `${this.base}?categories=${encodeURIComponent(category)}&page=${page}&limit=${limit}`
//     );
//   }

//   getTrending(limit = 12) {
//     return this.http.get<News[]>(`${this.base}/trending?limit=${limit}`);
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { News } from '../models/news.model';


// interface PagedResponse<T> {
//   page: number;
//   limit: number;
//   total: number;
//   items: T[];
// }

// interface ListResponse<T> {
//   ok: boolean;
//   count: number;
//   items: T[];
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsService {
//   private base = '/api/news';

//   constructor(private http: HttpClient) {}

// getLatest(limit = 10, category?: string, page?: number): Observable<News[]> {
//   const qs =
//     `?limit=${limit}` +
//     (category ? `&category=${encodeURIComponent(category)}` : '') +
//     (page ? `&page=${page}` : '');

//   return this.http
//     .get<{ ok: boolean; count: number; items: News[] }>(`${this.base}/latest${qs}`)
//     .pipe(map(res => res.items));   // 👉 always returns News[]
// }


//   getByCategory(category: string, page = 1, limit = 20){
//     return this.http.get<PagedResponse<News>>(
//       `${this.base}/category/${encodeURIComponent(category)}?page=${page}&limit=${limit}`
//     );
//   }


//   getCategories(): Observable<string[]> {
//     return this.http.get<string[]>(`${this.base}/categories`);
//   }


//   getTrending(limit = 12): Observable<News[]> {
//     return this.http
//       .get<ListResponse<News>>(`${this.base}/trending?limit=${limit}`)
//       .pipe(map(res => res.items));
//   }
// }

// src/app/services/news.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { News } from '../models/news.model';
import { environment } from '../../environments/environment';

export interface PagedResponse<T> {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  items: T[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  //private base = '/api/news';
  private base = `${environment.apiBase}/news`;

  constructor(private http: HttpClient) {}

  // ✅ returns full paged response
  getLatest(page = 1, limit = 10): Observable<PagedResponse<News>> {
    return this.http.get<PagedResponse<News>>(
      `${this.base}/latest?page=${page}&limit=${limit}`
    );
  }

  getByCategory(category: string, page = 1, limit = 20) {
    return this.http.get<PagedResponse<News>>(
      `${this.base}/category/${encodeURIComponent(category)}?page=${page}&limit=${limit}`
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.base}/categories`);
  }

  getTrending(limit = 12): Observable<News[]> {
    return this.http.get<News[]>(`${this.base}/trending?limit=${limit}`);
  }

  getLocalNews(): Observable<News[]> {
    return this.http.get<{ ok: boolean, items: News[] }>(`${this.base}/local`)
      .pipe(map(res => res.items));
  }
}
