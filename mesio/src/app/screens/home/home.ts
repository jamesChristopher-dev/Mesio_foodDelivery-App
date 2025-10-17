import {finalize} from 'rxjs/operators';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {ApiService} from '@/app/services/api.service';
import {Header} from '@/app/components/header/header';
import {Loader} from '@/app/components/loader/loader';
import {PopularItem} from '@/app/items/popular-item/popular-item';
import {BurgerModal} from '@/app/components/burger-modal/burger-modal';
import {BlockHeading} from '@/app/components/block-heading/block-heading';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';
import {BottomTabBar} from '@/app/components/bottom-tab-bar/bottom-tab-bar';
import {RecommendedItem} from '@/app/items/recommended-item/recommended-item';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    BottomTabBar,
    RecommendedItem,
    BlockHeading,
    PopularItem,
    Loader,
    CommonModule,
    RouterLink,
    SafeAreaView,
    BurgerModal,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements OnInit {
  svg = svg;
  isLoading = true;
  categories: string[] = [];
  popular: DishModel[] = [];
  recommended: DishModel[] = [];

  constructor(private apiService: ApiService) {}

  private computeCategories(dishes: DishModel[]): string[] {
    return Array.from(
      new Set(dishes.map(d => d.category).filter((c): c is string => !!c && c.trim().length > 0)),
    );
  }

  ngOnInit(): void {
    this.getDishes();
  }

  getDishes(): void {
    this.isLoading = true;
    this.apiService
      .getDishes()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: response => {
          const dishes = response.dishes ?? [];
          this.popular = dishes.filter(dish => dish.isPopular);
          this.recommended = dishes.filter(dish => dish.isRecommended);
          this.categories = this.computeCategories(dishes); // <- тут
        },
        error: err => {
          console.error('getDishes error:', err);
          this.popular = [];
          this.recommended = [];
          this.categories = [];
        },
      });
  }
}
