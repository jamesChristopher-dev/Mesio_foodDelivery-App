import {RouterLink} from '@angular/router';
import {Component, Input} from '@angular/core';

import {Rating} from '@/app/components/rating/rating';
import {ReviewModel} from '@/app/models/review.model';

@Component({
  selector: 'app-review-item',
  imports: [Rating, RouterLink],
  templateUrl: './review-item.html',
  styleUrl: './review-item.scss',
})
export class ReviewItem {
  @Input() review!: ReviewModel;
}
