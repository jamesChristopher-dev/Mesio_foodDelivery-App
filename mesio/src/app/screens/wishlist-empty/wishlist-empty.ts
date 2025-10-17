import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {WishlistState} from '@/app/services/wishlist.service';
import {WishlistService} from '@/app/services/wishlist.service';
import {BurgerModal} from '@/app/components/burger-modal/burger-modal';
import {BottomTabBar} from '@/app/components/bottom-tab-bar/bottom-tab-bar';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-wishlist-empty',
  imports: [SafeAreaView, Header, Button, BottomTabBar, BurgerModal],
  templateUrl: './wishlist-empty.html',
  styleUrl: './wishlist-empty.scss',
})
export class WishlistEmpty implements OnInit {
  svg = svg;
  wishlist: DishModel[] = [];
  wishlistState$!: Observable<WishlistState>;

  constructor(
    private router: Router,
    private wishlistService: WishlistService,
  ) {}

  private destroyRef = inject(DestroyRef);

  private initializeSubscription(): void {
    this.wishlistService.wishlistState$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(bikes => {
        this.wishlist = bikes;
        if (this.wishlist.length > 0) {
          this.router.navigate(['/wishlist']);
        }
      });
  }

  ngOnInit(): void {
    this.initializeSubscription();
  }
}
