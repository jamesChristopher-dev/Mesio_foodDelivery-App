import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

import {svg} from '@/app/svg';
import {Header} from '@/app/components/header/header';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-order-history',
  imports: [SafeAreaView, Header, NgStyle, RouterLink],
  templateUrl: './order-history.html',
  styleUrl: './order-history.scss',
})
export class OrderHistory {
  svg = svg;

  orders = [
    {
      id: 456345,
      date: 'Aug 31, 2023',
      time: '8:32 pm',
      status: 'shipping',
      total: 14.4,
      discount: 2.65,
      delivery: 2,
      dishes: [
        {
          id: 1,
          name: 'Mushroom Soup',
          quantity: 1,
          price: 7.5,
        },
        {
          id: 2,
          name: 'Noodle Soup',
          quantity: 1,
          price: 6.9,
        },
      ],
    },
    {
      id: 456346,
      date: 'Jul 28, 2023',
      time: '8:32 pm',
      status: 'delivered',
      total: 14.4,
      discount: 2.65,
      delivery: 2,
      dishes: [
        {
          id: 1,
          name: 'Mushroom Soup',
          quantity: 1,
          price: 7.5,
        },
        {
          id: 2,
          name: 'Noodle Soup',
          quantity: 1,
          price: 6.9,
        },
      ],
    },
    {
      id: 456347,
      date: 'Jun 11, 2023',
      time: '8:32 pm',
      status: 'canceled',
      total: 14.4,
      discount: 2.65,
      delivery: 2,
      dishes: [
        {
          id: 1,
          name: 'Mushroom Soup',
          quantity: 1,
          price: 7.5,
        },
        {
          id: 2,
          name: 'Noodle Soup',
          quantity: 1,
          price: 6.9,
        },
      ],
    },
  ];

  openAccordions: Set<number> = new Set();

  toggleAccordion(orderId: number): void {
    if (this.openAccordions.has(orderId)) {
      this.openAccordions.delete(orderId);
    } else {
      this.openAccordions.add(orderId);
    }
  }
}
