import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderChangeLog } from '../orders/models/order-log.model';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notificationList$: Observable<OrderChangeLog[]>;

  constructor(
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.getNotificationList();
  }

  getNotificationList(): void {
    this.notificationList$ = this.notificationsService.getNotificationList();
  }

  clearAllNotifications(): void {
    this.notificationsService.clearAllNotifications();
  }

}
