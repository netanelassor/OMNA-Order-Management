import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrdersFakeDB } from 'src/assets/fakeDB/orders';
import { NotificationsService } from '../notifications/notifications.service';
import { OrderChangeLog } from './models/order-log.model';
import { OrderStatus } from './models/order-status-enum.model';
import { Order } from './models/order.model';
import { OrderChangeLogFakeDB } from 'src/assets/fakeDB/orderChangeLog';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private notificationsService: NotificationsService
  ) { }

  /**
   * get orders from the list - by using real server - I w think it is right to filter in the server the list and return it
   *
   * @param {OrderStatus} status
   * @returns {Observable<Order[]>}
   * @memberof OrdersService
   */
  getOrderListByStatus(status: OrderStatus): Observable<Order[]> {
    return OrdersFakeDB.getOrderList()
      .pipe(map((orders: Order[]) => {
        return orders.filter(order => order.status === status);
      }));
  }

  /**
   * update the order new status and push notification
   *
   * @param {Order} order
   * @param {OrderChangeLog} newChangeLog
   * @returns
   * @memberof OrdersService
   */
  updateOrderStatus(order: Order, newChangeLog: OrderChangeLog): Observable<Order[]> {
    const orderItem = OrdersFakeDB.orderList.find(o => o.id === order.id);
    orderItem.status = newChangeLog.status;
    orderItem.lastUpdateDate = new Date();

    this.notificationsService.pushNewNotification(newChangeLog);
    return this.getOrderListByStatus(order.status);
  }
}

