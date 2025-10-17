import {Component, OnInit} from '@angular/core';

import {svg} from '@/app/svg';
import {Button} from '@/app/components/button/button';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

// Services
import {CartService} from '@/app/services/cart.service';

@Component({
  selector: 'app-order-successful',
  imports: [Button, SafeAreaView],
  templateUrl: './order-successful.html',
  styleUrl: './order-successful.scss',
})
export class OrderSuccessful implements OnInit {
  svg = svg;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartState$.subscribe(state => {
      state.list = [];
    });
  }
}
