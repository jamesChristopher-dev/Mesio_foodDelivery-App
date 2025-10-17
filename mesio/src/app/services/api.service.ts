import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {URLS} from '@/app/config';
import {DishModel} from '@/app/models/dish.model';
import {ReviewModel} from '../models/review.model';
import {PromocodeModel} from '@/app/models/promocode.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URLS = URLS;

  constructor(private http: HttpClient) {}

  getPromocodes(): Observable<{promocodes: PromocodeModel[]}> {
    return this.http.get<{promocodes: PromocodeModel[]}>(this.URLS.GET_PROMOCODES);
  }

  getDishes(): Observable<{dishes: DishModel[]}> {
    return this.http.get<{dishes: DishModel[]}>(this.URLS.GET_DISHES);
  }

  getReviews(): Observable<{reviews: ReviewModel[]}> {
    return this.http.get<{reviews: ReviewModel[]}>(this.URLS.GET_REVIEWS);
  }

  getDishById(id: number): Observable<DishModel | undefined> {
    const dishes = this.http.get<{dishes: DishModel[]}>(this.URLS.GET_DISHES);
    const dish = dishes.pipe(map(response => response.dishes.find(d => d.id === id)));
    return dish;
  }
}
