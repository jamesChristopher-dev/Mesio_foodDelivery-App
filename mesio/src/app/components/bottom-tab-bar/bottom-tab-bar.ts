import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

import {svg} from '@/app/svg';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-bottom-tab-bar',
  imports: [NgStyle, RouterLink],
  templateUrl: './bottom-tab-bar.html',
  styleUrl: './bottom-tab-bar.scss',
})
export class BottomTabBar {
  svg = svg;
  currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
}
