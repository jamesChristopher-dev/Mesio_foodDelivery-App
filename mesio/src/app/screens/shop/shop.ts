import {Component, OnInit} from '@angular/core';

import {DishModel} from '@/app/models/dish.model';
import {Header} from '@/app/components/header/header';
import {ShopItem} from '@/app/items/shop-item/shop-item';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

// Services
import {ApiService} from '@/app/services/api.service';

@Component({
  selector: 'app-shop',
  imports: [Header, SafeAreaView, ShopItem],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop implements OnInit {
  dishes: DishModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDishes().subscribe(response => {
      this.dishes = response.dishes ?? [];
    });
  }
}
