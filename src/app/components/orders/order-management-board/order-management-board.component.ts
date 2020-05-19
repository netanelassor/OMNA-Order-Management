import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { OrdersService } from '../orders.service';
import { OrderStatus } from '../models/order-status-enum.model';

@Component({
  selector: 'app-order-management-board',
  templateUrl: './order-management-board.component.html',
  styleUrls: ['./order-management-board.component.scss']
})
export class OrderManagementBoardComponent implements OnInit {

  openOrders$: Observable<Order[]>;
  canceledOrders$: Observable<Order[]>;
  holdOrders$: Observable<Order[]>;
  submittedOrders$: Observable<Order[]>;

  pageTitle = 'Dashboard';

  constructor(
    private ordersService: OrdersService,
  ) { }

  ngOnInit(): void {
    this.getOrderList();
  }

  getOrderList(): void {
    this.openOrders$ = this.ordersService.getOrderListByStatus(OrderStatus.Open);
    this.canceledOrders$ = this.ordersService.getOrderListByStatus(OrderStatus.Canceled);
    this.holdOrders$ = this.ordersService.getOrderListByStatus(OrderStatus.Hold);
    this.submittedOrders$ = this.ordersService.getOrderListByStatus(OrderStatus.Submitted);
  }

}
