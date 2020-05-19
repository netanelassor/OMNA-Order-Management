import { animate, style, transition, trigger, state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { OrderChangeLog } from '../../orders/models/order-log.model';
import { OrderStatus } from '../../orders/models/order-status-enum.model';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
  animations: [
    trigger('loadItemAnimation',
      [
        transition(':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.3s ease-out',
              style({ height: 110, opacity: 1 }))
          ])
      ]
    )
  ]
})

export class NotificationItemComponent implements OnInit {
  @Input() notification: OrderChangeLog;
  icon: string;

  constructor(
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
  }

  clearNotification(notification: OrderChangeLog): void {
    this.notificationsService.clearNotification(notification);
  }

}
