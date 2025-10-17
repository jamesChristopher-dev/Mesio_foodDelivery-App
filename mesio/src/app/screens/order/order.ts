import {take} from 'rxjs/operators';
import {CurrencyPipe} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {svg} from '@/app/svg';
import {Observable} from 'rxjs';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {OrderItem} from '@/app/items/order-item/order-item';
import {BurgerModal} from '@/app/components/burger-modal/burger-modal';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';
import {BottomTabBar} from '@/app/components/bottom-tab-bar/bottom-tab-bar';

import {DishModel} from '@/app/models/dish.model';
import {CartState} from '@/app/services/cart.service';
import {CartService} from '@/app/services/cart.service';

@Component({
  selector: 'app-order',
  imports: [
    Header,
    BottomTabBar,
    SafeAreaView,
    OrderItem,
    Button,
    RouterLink,
    BurgerModal,
    CurrencyPipe,
  ],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order implements OnInit {
  svg = svg;
  total: number = 0;
  dishes: DishModel[] = [];
  cartState$!: Observable<CartState>;

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {}

  private destroyRef = inject(DestroyRef);

  private initializeCartState(): void {
    this.cartState$.subscribe(state => {
      this.total = state.total || 0;
      this.dishes = state.list || [];
      if (this.dishes.length === 0) {
        this.router.navigate(['/order-empty']);
      }
    });
  }

  ngOnInit(): void {
    this.cartState$ = this.cartService.cartState$;
    this.cartState$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(state => {
      this.dishes = state.list ?? [];
    });
    this.cartState$.pipe(take(1)).subscribe(state => {
      const empty = !state.list || state.list.length === 0;
      if (empty) this.router.navigate(['/order-empty']);
    });

    this.initializeCartState();
  }
}
