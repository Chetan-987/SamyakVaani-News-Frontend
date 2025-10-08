import { Component } from '@angular/core';
import { NavTopBar } from '../nav-top-bar/nav-top-bar';
import { CategoryNews } from "../category-news/category-news";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CategoryNews],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
