import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

import {svg} from '@/app/svg';
import {Header} from '@/app/components/header/header';
import {Button} from '@/app/components/button/button';
import {BurgerModal} from '@/app/components/burger-modal/burger-modal';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';
import {BottomTabBar} from '@/app/components/bottom-tab-bar/bottom-tab-bar';

@Component({
  selector: 'app-order-empty',
  imports: [Header, BottomTabBar, SafeAreaView, Button, RouterLink, BurgerModal],
  templateUrl: './order-empty.html',
  styleUrl: './order-empty.scss',
})
export class OrderEmpty {
  svg = svg;
}
