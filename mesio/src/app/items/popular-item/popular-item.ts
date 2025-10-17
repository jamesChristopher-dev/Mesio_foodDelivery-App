import {RouterLink} from '@angular/router';
import {Component, Input} from '@angular/core';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {Rating} from '@/app/components/rating/rating';
import {CartService} from '@/app/services/cart.service';
import {WishlistService} from '@/app/services/wishlist.service';
import {AddToCartBtn} from '@/app/components/add-to-cart-btn/add-to-cart-btn';

@Component({
  selector: 'app-popular-item',
  imports: [AddToCartBtn, Rating, RouterLink],
  templateUrl: './popular-item.html',
  styleUrl: './popular-item.scss',
})
export class PopularItem {
  svg = svg;
  cart: DishModel[] = [];
  wishlist: DishModel[] = [];

  @Input() dish!: DishModel;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  ngOnInit(): void {
    this.setCart();
    this.setWishlist();
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(dishes => {
      this.wishlist = dishes;
    });
  }

  addToCart(dish: DishModel): void {
    this.cartService.addToCart(dish);
  }

  addToWishlist(dish: DishModel): void {
    this.wishlistService.addToWishlist(dish);
  }

  removeFromWishlist(dish: DishModel): void {
    this.wishlistService.removeFromWishlist(dish);
  }

  ifInWishlist(dish: DishModel): boolean {
    return this.wishlist.some(item => item.id === dish.id);
  }

  ifInCart(dish: DishModel): boolean {
    return this.cart.some(item => item.id === dish.id);
  }

  setCart(): void {
    this.cartService.cartState$.subscribe(dishes => {
      this.cart = dishes.list;
    });
  }
}
