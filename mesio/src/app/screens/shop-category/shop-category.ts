import {Component, Input, SimpleChanges} from '@angular/core';
import {finalize} from 'rxjs/operators';

import {svg} from '@/app/svg';
import {DishModel} from '@/app/models/dish.model';
import {Header} from '@/app/components/header/header';
import {ApiService} from '@/app/services/api.service';
import {ShopItem} from '@/app/items/shop-item/shop-item';

@Component({
  selector: 'app-shop-category',
  imports: [Header, ShopItem],
  templateUrl: './shop-category.html',
  styleUrl: './shop-category.scss',
})
export class ShopCategory {
  svg = svg;

  @Input({required: true}) category!: string;

  isLoading = true;
  error: string | null = null;
  dishes: DishModel[] = [];
  filteredDishes: DishModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getDishes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']) this.applyFilter();
  }

  private getDishes(): void {
    this.isLoading = true;
    this.error = null;
    this.apiService
      .getDishes()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: response => {
          this.dishes = response?.dishes ?? [];
          this.applyFilter();
        },
        error: err => {
          console.error('getDishes error:', err);
          this.error = 'Failed to load dishes';
          this.dishes = [];
          this.filteredDishes = [];
        },
      });
  }

  private applyFilter(): void {
    const cat = (this.category ?? 'all').toLowerCase();
    this.filteredDishes =
      cat === 'all'
        ? this.dishes
        : this.dishes.filter(d => (d.category ?? '').toLowerCase() === cat);
  }

  capitalizeWords(str: string): string {
    if (!str) return 'Shop';
    return str
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  }
}
