import {Component} from '@angular/core';

import {svg} from '@/app/svg';
import {Header} from '@/app/components/header/header';
import {BurgerModal} from '@/app/components/burger-modal/burger-modal';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';
import {BottomTabBar} from '@/app/components/bottom-tab-bar/bottom-tab-bar';
import {ProfileMenuItem} from '@/app/items/profile-menu-item/profile-menu-item';

@Component({
  selector: 'app-profile',
  imports: [Header, BottomTabBar, ProfileMenuItem, SafeAreaView, BurgerModal],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  svg = svg;
}
