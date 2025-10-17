import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';

import {svg} from '@/app/svg';
import {NgStyle} from '@angular/common';
import {CartState} from '@/app/services/cart.service';
import {CartService} from '@/app/services/cart.service';
import {ModalService} from '@/app/services/modal.service';

@Component({
  selector: 'app-header',
  imports: [NgStyle, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  svg = svg;
  total: number = 0;
  cartState$: Observable<CartState>;

  @Input() title: string = '';
  @Input() showGoBack: boolean = false;
  @Input() showBasket: boolean = false;
  @Input() showBurger: boolean = false;
  @Input() titleStyle: {[key: string]: string | number} = {};

  constructor(
    private location: Location,
    private cartService: CartService,
    private modalService: ModalService,
  ) {
    this.cartState$ = this.cartService.cartState$;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.cartState$.subscribe(state => {
      this.total = state.total;
    });
  }

  openModal(): void {
    this.modalService.openModal();
  }
}
