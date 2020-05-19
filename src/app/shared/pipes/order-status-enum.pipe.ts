import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from 'src/app/components/orders/models/order-status-enum.model';

@Pipe({
  name: 'orderStatusEnum'
})
export class OrderStatusEnumPipe implements PipeTransform {

  transform(value: OrderStatus, ...args: unknown[]): unknown {

    switch (value) {
      case OrderStatus.Open:
        return 'Open';
      case OrderStatus.Canceled:
        return 'Canceled';
      case OrderStatus.Hold:
        return 'On Hold';
      case OrderStatus.Submitted:
        return 'Submitted';
      default:
        return 'Open';
    }
  }

}
