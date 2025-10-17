import {RouterLink} from '@angular/router';
import {Component, Input} from '@angular/core';

import {svg} from '@/app/svg';

@Component({
  selector: 'app-profile-menu-item',
  imports: [RouterLink],
  templateUrl: './profile-menu-item.html',
  styleUrl: './profile-menu-item.scss',
})
export class ProfileMenuItem {
  @Input() icon!: string;
  @Input() route!: string;
  @Input() title!: string;
  @Input() description!: string;

  svg = svg;
}
