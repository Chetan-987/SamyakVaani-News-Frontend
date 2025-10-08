import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeFetchVideos {
  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get<any[]>('/api/youtube/videos?handle=@SamyakVaani1');
  }

}
