// src/app/services/youtube.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface YouTubeVideo {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

export interface YouTubePagedResponse {
  videos: YouTubeVideo[];
  nextPageToken?: string;
  prevPageToken?: string;
  totalResults?: number;
}

@Injectable({ providedIn: 'root' })
export class YouTubeService {
  private baseUrl = '/api/youtube/videos';

  constructor(private http: HttpClient) {}

  getVideos(
    handle = '@SamyakVaani1',
    pageToken = '',
    maxResults = 6
  ): Observable<YouTubePagedResponse> {
    const params = { handle, pageToken, maxResults };
    return this.http.get<YouTubePagedResponse>(this.baseUrl, { params });
  }
}
