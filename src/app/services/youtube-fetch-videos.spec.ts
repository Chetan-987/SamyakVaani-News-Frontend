import { TestBed } from '@angular/core/testing';

import { YoutubeFetchVideos } from './youtube-fetch-videos';

describe('YoutubeFetchVideos', () => {
  let service: YoutubeFetchVideos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeFetchVideos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
