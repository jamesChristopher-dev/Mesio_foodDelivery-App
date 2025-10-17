import {Component, Input} from '@angular/core';

import {svg} from '@/app/svg';
import {PromocodeModel} from '@/app/models/promocode.model';

@Component({
  selector: 'app-promocode-item',
  imports: [],
  templateUrl: './promocode-item.html',
  styleUrl: './promocode-item.scss',
})
export class PromocodeItem {
  svg = svg;

  @Input() promo!: PromocodeModel;

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(
      () => {
        alert(`${text} code copied to clipboard`);
      },
      err => {
        console.error('Could not copy text: ', err);
      },
    );
  }
}
