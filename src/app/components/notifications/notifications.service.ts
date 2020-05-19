import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderChangeLogFakeDB } from 'src/assets/fakeDB/orderChangeLog';
import { OrderChangeLog } from '../orders/models/order-log.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notificationSubject: BehaviorSubject<OrderChangeLog[]> = new BehaviorSubject<OrderChangeLog[]>(null);
  notificationList: OrderChangeLog[];

  constructor() { }

  /**
   * Get notification list - I tried to simulate working with server
   *
   * @returns {Observable<OrderChangeLog[]>}
   * @memberof NotificationsService
   */
  getNotificationList(): Observable<OrderChangeLog[]> {
    this.notificationList = OrderChangeLogFakeDB.orderChangeLogList;
    this.notificationList = this.notificationList.sort((a: OrderChangeLog, b: OrderChangeLog) => {
      return this.getTime(a.date) - this.getTime(b.date);
    });
    this.notificationSubject.next([...this.notificationList]);
    return this.notificationSubject.asObservable();
  }


  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }

  /**
   * push notification to the list
   *
   * @param {OrderChangeLog} changeLog
   * @memberof NotificationsService
   */
  pushNewNotification(changeLog: OrderChangeLog) {
    OrderChangeLogFakeDB.orderChangeLogList.push(changeLog);
    this.notificationList.unshift(changeLog);
    this.notificationSubject.next([...this.notificationList]);
  }

  /**
   * clear single notification from the list
   *
   * @param {OrderChangeLog} notification
   * @memberof NotificationsService
   */
  clearNotification(notification: OrderChangeLog) {
    this.notificationList = this.notificationList.filter(log => log !== notification);
    this.notificationSubject.next([...this.notificationList]);
  }

  /**
   * clear all of the notification from the list.
   *
   * @memberof NotificationsService
   */
  clearAllNotifications() {
    this.notificationList = [];
    this.notificationSubject.next([...this.notificationList]);
  }
}
