import {Router} from '@angular/router';
import {RouterLink} from '@angular/router';
import {CurrencyPipe} from '@angular/common';
import {Component, OnInit, inject, DestroyRef} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {CartService} from '@/app/services/cart.service';
import {InputField} from '@/app/components/input-field/input-field';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-checkout',
  imports: [Header, InputField, Button, CurrencyPipe, SafeAreaView, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout implements OnInit {
  svg = svg;
  total = 0;
  dishes: DishModel[] = [];

  private destroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.cartService.cartState$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(state => {
      this.total = state.total || 0;
      this.dishes = state.list || [];

      this.onDishesChange();
    });
  }

  private onDishesChange(): void {
    if (this.dishes.length === 0) {
      this.router.navigate(['/order-empty']);
    }
  }
}
