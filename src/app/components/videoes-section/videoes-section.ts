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
export class VideoesSection {
  // videos: any[] = [];

  // constructor(private yt: YoutubeFetchVideos, private cdr : ChangeDetectorRef) {}

  // ngOnInit() {
  //   this.yt.getVideos().subscribe((data) => {
  //     console.log("Youtube data is: ", data);
  //     this.videos = data;
  //     this.cdr.detectChanges();
  //   });
  // }

  videos = [
  {
    videoId: 'vJh4WBk5JBA',
    title: 'ಪಡಿತರ ಚೀಟಿಯಿಂದ ನಿಜ ಫಲಾನುಭವಿಯ ಹೆಸರು ತೆಗೆದು ನ*ಲಿ ಫಲಾನುಭವಿ ಹೆಸರಿಗೆ ಬದಲಾವಣೆ',
    thumbnail: 'https://img.youtube.com/vi/vJh4WBk5JBA/maxresdefault.jpg'
  },
  {
    videoId: 'UaoocYVcimc',
    title: 'ಕಂದಾಯ ದಿನಾಚರಣೆ ಅಂಗವಾಗಿ ಬೀದರ್ ನಗರದ ಪೊಲೀಸ್ ಕವಾಯಿತು ಮೈದಾನದಲ್ಲಿ ಕ್ರೀಡಾಕೂಟ',
    thumbnail: 'https://img.youtube.com/vi/UaoocYVcimc/maxresdefault.jpg'
  },
  {
    videoId: 'mDC2RPERits',
    title: 'ಅವೈಜ್ಞಾನಿಕ ವರದಿ ವಿರೋಧಿಸಿ :ನ್ಯಾ.ಮೂ. ನಾಗಮೋಹನ್ ದಾಸ್ ವಿರುದ್ಧ ರಸ್ತೆಗಿಳಿದ ಬಲಗೈ ಸಮುದಾಯ',
    thumbnail: 'https://img.youtube.com/vi/mDC2RPERits/maxresdefault.jpg'
  },
  {
    videoId: 'SMF5E4Omyj8',
    title: 'ಕರ್ನಾಟಕ ಪರಿಶಿಷ್ಟ ಜಾತಿ - ಪಂಗಡಗಳ ಸುಳ್ಳು ಜಾತಿ ಪ್ರಮಾಣ ಪತ್ರಗಳ ವಿರೋಧಿ ಹೋರಾಟ ಸಮಿತಿ ವತಿಯಿಂದ',
    thumbnail: 'https://img.youtube.com/vi/SMF5E4Omyj8/maxresdefault.jpg'
  },
  {
    videoId: 'zsfmHhICuI4',
    title: 'ಪರಿಶಿಷ್ಟ ಜಾತಿ ಒಳ ಮೀಸಲಾತಿ ನ್ಯಾಯಮೂರ್ತಿ ನಾಗಮೋಹನ್ ದಾಸ್ ಅವರ ಅವೈಜ್ಞಾನಿಕ ಸಮೀಕ್ಷೆ ವಿರೋಧಿಸಿ ಪ್ರತಿಭಟನೆ ',
    thumbnail: 'https://img.youtube.com/vi/zsfmHhICuI4/maxresdefault.jpg'
  },
  {
    videoId: 'v_x2SWE5IfI',
    title: 'ಸುರಕ್ಷತೆ ಎಲ್ಲಿದೆ? ಭಾಲ್ಕಿಯಲ್ಲಿ ಹಗಲು ಕಳ್ಳತನ ಹೆಚ್ಚಳ',
    thumbnail: 'https://img.youtube.com/vi/v_x2SWE5IfI/maxresdefault.jpg'
  }
];

}
