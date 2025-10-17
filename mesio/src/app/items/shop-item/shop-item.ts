import {RouterLink} from '@angular/router';
import {Component, Input} from '@angular/core';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {Rating} from '@/app/components/rating/rating';
import {CartService} from '@/app/services/cart.service';
import {WishlistService} from '@/app/services/wishlist.service';
import {AddToCartBtn} from '@/app/components/add-to-cart-btn/add-to-cart-btn';

@Component({
  selector: 'app-shop-item',
  imports: [Rating, RouterLink, AddToCartBtn],
  templateUrl: './shop-item.html',
  styleUrl: './shop-item.scss',
})
export class ShopItem {
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

  setCart(): void {
    this.cartService.cartState$.subscribe(dishes => {
      this.cart = dishes.list;
    });
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(dishes => {
      this.wishlist = dishes;
    });
  }

  ifInWishlist(dish: DishModel): boolean {
    return this.wishlist.some(item => item.id === dish.id);
  }

  removeFromWishlist(dish: DishModel): void {
    this.wishlistService.removeFromWishlist(dish);
  }

  addToCart(dish: DishModel): void {
    this.cartService.addToCart(dish);
  }

  addToWishlist(dish: DishModel): void {
    this.wishlistService.addToWishlist(dish);
  }

  ifInCart(dish: DishModel): boolean {
    return this.cart.some(item => item.id === dish.id);
  }
}
