import {Component, Input} from '@angular/core';

import {NotificationModel} from '@/app/models/notification.model';

@Component({
  selector: 'app-notification-item',
  imports: [],
  templateUrl: './notification-item.html',
  styleUrl: './notification-item.scss',
})
export class NotificationItem {
  @Input({required: true}) notification!: NotificationModel;
}
