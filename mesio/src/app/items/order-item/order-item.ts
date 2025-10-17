import {Observable} from 'rxjs';
import {RouterLink} from '@angular/router';
import {Component, Input} from '@angular/core';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {Rating} from '@/app/components/rating/rating';
import {CartState} from '@/app/services/cart.service';
import {CartService} from '@/app/services/cart.service';

@Component({
  selector: 'app-order-item',
  imports: [Rating, RouterLink],
  templateUrl: './order-item.html',
  styleUrl: './order-item.scss',
})
export class OrderItem {
  svg = svg;
  cartState$: Observable<CartState>;
  @Input({required: true}) dish!: DishModel;

  constructor(private cartService: CartService) {
    this.cartState$ = this.cartService.cartState$;
  }

  addToCart(dish: DishModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(dish);
  }

  removeFromCart(dish: DishModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.removeFromCart(dish);
  }

  getDishQty(): number {
    let qty = 0;
    this.cartState$.subscribe(state => {
      qty = state.list.find(item => item.id === this.dish?.id)?.quantity || 0;
    });
    return qty;
  }
}
