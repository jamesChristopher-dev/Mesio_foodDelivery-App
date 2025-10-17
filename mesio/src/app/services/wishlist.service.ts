import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {DishModel} from '@/app/models/dish.model';

export interface WishlistState {
  list: DishModel[];
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private initialState: DishModel[] = [];
  private wishlistState = new BehaviorSubject<DishModel[]>(this.initialState);
  wishlistState$ = this.wishlistState.asObservable();
  addToWishlist(dish: DishModel): void {
    const currentState = this.wishlistState.value;
    const inWishlist = currentState.find(item => item.id === dish.id);
    if (!inWishlist) {
      this.wishlistState.next([...currentState, dish]);
    }
  }
  removeFromWishlist(dish: DishModel): void {
    const currentState = this.wishlistState.value;
    const updatedState = currentState.filter(item => item.id !== dish.id);
    this.wishlistState.next(updatedState);
  }
  getWishlist(): DishModel[] {
    return this.wishlistState.value;
  }
}
