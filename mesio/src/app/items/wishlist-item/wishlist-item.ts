import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {Rating} from '@/app/components/rating/rating';
import {WishlistService} from '@/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist-item',
  imports: [Rating],
  templateUrl: './wishlist-item.html',
  styleUrl: './wishlist-item.scss',
})
export class WishlistItem {
  svg = svg;

  @Input({required: true}) dish!: DishModel;
  @Input() isInWishlist = true;

  constructor(
    private router: Router,
    private wishlistService: WishlistService,
  ) {}

  navigateToDish(): void {
    this.router.navigate(['/dish', this.dish.id]);
  }

  onRemoveClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.removeFromWishlist(this.dish);
  }
}
