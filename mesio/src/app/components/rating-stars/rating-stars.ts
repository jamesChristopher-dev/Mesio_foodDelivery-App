import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-rating-stars',
  imports: [NgStyle],
  templateUrl: './rating-stars.html',
  styleUrl: './rating-stars.scss',
})
export class RatingStars {
  @Input() rating = 0;
  @Input() containerStyle: Record<string, string> = {};
  @Output() ratingChange = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];

  onStarClick(starValue: number): void {
    const newRating = this.rating === starValue ? 0 : starValue;
    this.rating = newRating;
    this.ratingChange.emit(newRating);
  }

  isStarActive(starValue: number): boolean {
    return this.rating >= starValue;
  }
}
