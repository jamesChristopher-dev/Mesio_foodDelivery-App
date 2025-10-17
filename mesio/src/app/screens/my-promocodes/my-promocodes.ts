import {Component, OnInit} from '@angular/core';

import {svg} from '@/app/svg';
import {ApiService} from '@/app/services/api.service';
import {Header} from '@/app/components/header/header';
import {Loader} from '@/app/components/loader/loader';
import {PromocodeModel} from '@/app/models/promocode.model';
import {PromocodeItem} from '@/app/items/promocode-item/promocode-item';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-my-promocodes',
  imports: [Header, PromocodeItem, SafeAreaView, Loader],
  templateUrl: './my-promocodes.html',
  styleUrl: './my-promocodes.scss',
})
export class MyPromocodes implements OnInit {
  svg = svg;
  isLoading = true;
  promocodes: PromocodeModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPromocodes().subscribe(response => {
      this.promocodes = response.promocodes;
      this.isLoading = false;
    });
  }
}
