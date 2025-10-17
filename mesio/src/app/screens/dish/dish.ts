import {Observable} from 'rxjs';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, inject} from '@angular/core';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {ApiService} from '@/app/services/api.service';
import {Loader} from '@/app/components/loader/loader';
import {ReviewModel} from '@/app/models/review.model';
import {CartState} from '@/app/services/cart.service';
import {CartService} from '@/app/services/cart.service';
import {ReviewItem} from '@/app/items/review-item/review-item';
import {WishlistService} from '@/app/services/wishlist.service';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-dish',
  imports: [Loader, Header, Button, ReviewItem, CommonModule, SafeAreaView, RouterLink],
  templateUrl: './dish.html',
  styleUrl: './dish.scss',
})
export class Dish implements OnInit {
  svg = svg;
  dish: DishModel | undefined;
  reviews: ReviewModel[] = [];
  dishLoading = true;
  reviewsLoading = true;
  qty = 0;
  cart: DishModel[] = [];
  wishlist: DishModel[] = [];
  isLoading = this.dishLoading || this.reviewsLoading;

  cartState$: Observable<CartState>;

  private route = inject(ActivatedRoute);

  constructor(
    private apiService: ApiService,
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {
    this.cartState$ = this.cartService.cartState$;
  }

  ngOnInit(): void {
    this.setCart();
    this.getReviews();
    this.getDishById();
    this.setWishlist();
  }

  getDishById(): void {
    this.dishLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getDishById(Number(id)).subscribe({
      next: dish => {
        this.dish = dish;
        this.dishLoading = false;
      },
      error: error => {
        console.error('Error fetching dish:', error);
        this.dishLoading = false;
      },
    });
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
      complete: () => (this.isLoading = false),
    });
  }

  addToCart($event: Event): void {
    $event.stopPropagation();
    $event.preventDefault();
    if (this.dish) {
      this.cartService.addToCart(this.dish);
    }
  }

  removeFromCart($event: Event): void {
    $event.stopPropagation();
    $event.preventDefault();
    if (this.dish) {
      this.cartService.removeFromCart(this.dish);
    }
  }

  getDishQty(): number {
    let qty = 0;
    this.cartState$.subscribe(state => {
      qty = state.list.find(item => item.id === this.dish?.id)?.quantity || 0;
    });
    return qty;
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(dishes => {
      this.wishlist = dishes;
    });
  }

  ifInCart(dish: DishModel): boolean {
    return this.cart.some(item => item.id === dish.id);
  }

  setCart(): void {
    this.cartService.cartState$.subscribe(dishes => {
      this.cart = dishes.list;
    });
  }

  addToWishlist(dish: DishModel): void {
    this.wishlistService.addToWishlist(dish);
  }

  ifInWishlist(dish: DishModel): boolean {
    return this.wishlist.some(item => item.id === dish.id);
  }
}
