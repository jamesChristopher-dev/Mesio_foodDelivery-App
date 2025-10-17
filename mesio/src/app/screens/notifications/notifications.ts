import {Component} from '@angular/core';

import {svg} from '@/app/svg';
import {Header} from '@/app/components/header/header';
import {NotificationItem} from '@/app/items/notification-item/notification-item';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-notifications',
  imports: [Header, SafeAreaView, NotificationItem],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {
  svg = svg;

  notifications = [
    {
      id: 1,
      icon: svg.error,
      iconColor: '#F44336',
      iconBg: 'rgba(244,67,54,0.1)',
      title: 'Your Order Cancel',
      message: 'Order #107 has been cancelled',
      bold: ['Order #107'],
    },
    {
      id: 2,
      icon: svg.walletSvg,
      iconColor: '#FFD600',
      iconBg: 'rgba(255,214,0,0.1)',
      title: 'Payment',
      message: 'Thank you! Your transaction is com...',
      bold: [],
    },
    {
      id: 3,
      icon: svg.promotionSvg,
      iconColor: '#00BFA5',
      iconBg: 'rgba(0,191,165,0.1)',
      title: 'Promotion',
      message: 'Invite friends - Get 1 coupons',
      bold: [],
    },
    {
      id: 4,
      icon: svg.ntfSuccess,
      iconColor: '#7C4DFF',
      iconBg: 'rgba(124,77,255,0.1)',
      title: 'Your Order Accept',
      message: 'Order #1234 has been success...',
      bold: ['Order #1234'],
    },
  ];
}
