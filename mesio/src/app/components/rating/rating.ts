import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
})
export class Rating {
  @Input() rating: number = 5;
}
