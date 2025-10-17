import {RouterLink} from '@angular/router';
import {Component, Input} from '@angular/core';

import {DishModel} from '@/app/models/dish.model';
import {Rating} from '@/app/components/rating/rating';

@Component({
  selector: 'app-recommended-item',
  imports: [Rating, RouterLink],
  templateUrl: './recommended-item.html',
  styleUrl: './recommended-item.scss',
})
export class RecommendedItem {
  @Input() dish!: DishModel;
}
