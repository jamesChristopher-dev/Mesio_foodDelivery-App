import {Component, OnInit} from '@angular/core';

import {DishModel} from '@/app/models/dish.model';
import {Header} from '@/app/components/header/header';
import {ApiService} from '@/app/services/api.service';
import {ShopItem} from '@/app/items/shop-item/shop-item';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-shop-popular',
  imports: [Header, SafeAreaView, ShopItem],
  templateUrl: './shop-popular.html',
  styleUrl: './shop-popular.scss',
})
export class ShopPopular implements OnInit {
  dishes: DishModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDishes().subscribe(response => {
      const dishes = response.dishes ?? [];
      this.dishes = dishes.filter(dish => dish.isPopular);
    });
  }
}
