import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  socialLinks = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/people/%E0%B2%B8%E0%B2%AE%E0%B3%8D%E0%B2%AF%E0%B2%95%E0%B3%8D-%E0%B2%B5%E0%B2%BE%E0%B2%A3%E0%B2%BF-Samyak-Vaani-24x7-Kannada-News/61577723644208/',
      icon: 'fab fa-facebook-f'
    },
    {
      name: 'twitter',
      url: 'https://x.com/SGoureeditor?t=2Bt5bsBjbD3YdnhYyH-tzA&s=09',
      icon: 'fab fa-twitter'
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/samyakvaani/?igsh=dnluM2Q3Z3RkNDZ3#',
      icon: 'fab fa-instagram'
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com/@SamyakVaani1',
      icon: 'fab fa-youtube'
    }
  ];
}
