import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {svg} from '@/app/svg';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {InputField} from '@/app/components/input-field/input-field';
import {RatingStars} from '@/app/components/rating-stars/rating-stars';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-leave-a-reviews',
  imports: [SafeAreaView, Header, Button, InputField, RatingStars],
  templateUrl: './leave-a-reviews.html',
  styleUrl: './leave-a-reviews.scss',
})
export class LeaveAReviews {
  svg = svg;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
