import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

import {svg} from '@/app/svg';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-my-promocodes-empty',
  imports: [Header, Button, RouterLink, SafeAreaView],
  templateUrl: './my-promocodes-empty.html',
  styleUrl: './my-promocodes-empty.scss',
})
export class MyPromocodesEmpty {
  svg = svg;
}
