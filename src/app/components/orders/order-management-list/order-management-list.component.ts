import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { OrderStatusEnumPipe } from 'src/app/shared/pipes/order-status-enum.pipe';
import { OrderChangeLog } from '../models/order-log.model';
import { OrderStatus } from '../models/order-status-enum.model';
import { Order } from '../models/order.model';
import { OrdersService } from '../orders.service';
import { takeUntil } from 'rxjs/operators';
import { ChangeOrderStatusModalComponent } from '../change-order-status-modal copy/change-order-status-modal.component';
import { OrderItemModalComponent } from '../order-item-modal/order-item-modal.component';

@Component({
  selector: 'app-order-management-list',
  templateUrl: './order-management-list.component.html',
  styleUrls: ['./order-management-list.component.scss'],
  providers: [OrderStatusEnumPipe]
})
export class OrderManagementListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  pageTitle = 'Order Management';

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id',  'description', 'customerName', 'status', 'lastUpdateDate', 'quickAction', 'menuAction'];

  status: OrderStatus = OrderStatus.Open;
  get OrderStatusEnum() { return OrderStatus; }
  private destroy: Subject<void> = new Subject();


  constructor(
    private ordersService: OrdersService,
    public dialog: MatDialog,
    private toastService: MatSnackBar,
    private statusPipe: OrderStatusEnumPipe,
    private activeRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.status = +routeParams.status;
      this.getOrderList();
    });

  }

  ngOnDestroy(): void  {
    this.destroy.next();
    this.destroy.complete();
  }


  getOrderList(): void {
    this.ordersService.getOrderListByStatus(this.status).pipe(takeUntil(this.destroy)).subscribe((orderList: Order[]) => {

      this.dataSource.data = orderList;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  updateOrderStatus(order: Order, newStatus: OrderStatus): void {
    const dialogRef = this.dialog.open(ChangeOrderStatusModalComponent, {
      width: '400px',
      data: { order, newStatus }
    });

    dialogRef.afterClosed().subscribe((result: OrderChangeLog) => {
      if (result) {
        this.ordersService.updateOrderStatus(order, result).pipe(takeUntil(this.destroy)).subscribe((orderList: Order[]) => {
            this.dataSource.data = orderList;
          });
        const message = `Order number #${order.id} has ben ${this.statusPipe.transform(result.status)} successfully`;
        this.showToast(message, true);
      }
    });
  }

  showOrderDetails(order: Order): void {
    const dialogRef = this.dialog.open(OrderItemModalComponent, {
      width: '600px',
      data: { order }
    });

    dialogRef.afterClosed().subscribe((result: OrderChangeLog) => {
      if (result) {
      }
    });
  }

  search(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showToast(message: string, success: boolean): void {
    this.toastService.open(message, '', {
      duration: 5000,
      panelClass: success ? ['notif-success'] : ['notif-error']
    });
  }
}
