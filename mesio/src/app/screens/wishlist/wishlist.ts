import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {svg} from '@/app/svg';
import {Header} from '@/app/components/header/header';
import {WishlistState} from '@/app/services/wishlist.service';
import {WishlistService} from '@/app/services/wishlist.service';
import {WishlistItem} from '@/app/items/wishlist-item/wishlist-item';
import {BurgerModal} from '@/app/components/burger-modal/burger-modal';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';
import {BottomTabBar} from '@/app/components/bottom-tab-bar/bottom-tab-bar';

import {DishModel} from '@/app/models/dish.model';

@Component({
  selector: 'app-wishlist',
  imports: [Header, BottomTabBar, SafeAreaView, WishlistItem, BurgerModal],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.scss',
})
export class Wishlist implements OnInit {
  svg = svg;
  wishlist: DishModel[] = [];
  wishlistState$!: Observable<WishlistState>;

  constructor(
    private router: Router,
    private wishlistService: WishlistService,
  ) {}

  private initializeSubscription(): void {
    const message = 'Wishlist is empty. Redirecting to empty-wishlist screen...';

    this.wishlistService.wishlistState$.subscribe(bikes => {
      this.wishlist = bikes;
      if (this.wishlist.length === 0) {
        console.warn(message);
        this.router.navigate(['/wishlist-empty']);
      }
    });
  }

  ngOnInit(): void {
    this.initializeSubscription();
  }
}
