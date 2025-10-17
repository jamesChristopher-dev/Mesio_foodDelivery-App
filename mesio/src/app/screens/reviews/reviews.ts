import {Component, OnInit} from '@angular/core';

import {svg} from '@/app/svg';
import {Header} from '@/app/components/header/header';
import {ReviewModel} from '@/app/models/review.model';
import {ApiService} from '@/app/services/api.service';
import {ReviewItem} from '@/app/items/review-item/review-item';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-reviews',
  imports: [Header, SafeAreaView, ReviewItem],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews implements OnInit {
  svg = svg;
  reviewsLoading = true;
  reviews: ReviewModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewsLoading = true;
    this.apiService.getReviews().subscribe({
      next: data => {
        this.reviews = data.reviews;
        this.reviewsLoading = false;
      },
      error: error => {
        console.error('Error fetching reviews:', error);
        this.reviewsLoading = false;
      },
      complete: () => (this.reviewsLoading = false),
    });
  }
}
