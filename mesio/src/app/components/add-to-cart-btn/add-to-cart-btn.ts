import {Component, Input} from '@angular/core';

import {DishModel} from '@/app/models/dish.model';
import {CartService} from '@/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart-btn',
  imports: [],
  templateUrl: './add-to-cart-btn.html',
  styleUrl: './add-to-cart-btn.scss',
})
export class AddToCartBtn {
  @Input() dish!: DishModel;

  constructor(private cartService: CartService) {}

  addToCart($event: Event, dish: DishModel): void {
    $event.stopPropagation();
    $event.preventDefault();
    this.cartService.addToCart(dish);
  }
}
