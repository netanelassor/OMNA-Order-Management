import { OrderStatus } from "src/app/components/orders/models/order-status-enum.model";
import { OrderChangeLog } from 'src/app/components/orders/models/order-log.model';
import { of, Observable } from 'rxjs';

export class OrderChangeLogFakeDB {

    public static orderChangeLogList: OrderChangeLog[] = [
        {
            id: 1,
            orderId: 3022,
            changedBy: 'Oren S',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerName: 'a.a pilony',
            customerId: 522
        },
        {
            id: 2,
            orderId: 3024,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 523,
            customerName: 'SARA inc'
        },
        {
            id: 3,
            orderId: 3023,
            changedBy: 'Yoav M',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerName: 'a.a pilony',
            customerId: 523
        },
        {
            id: 4,
            orderId: 3023,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Canceled,
            comment: 'Approved by the customer - by Jhone',
            customerName: 'a.a pilony',
            customerId: 523
        },
        {
            id: 5,
            orderId: 3025,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Open,
            comment: 'Approved by the customer - by Jhone',
            customerId: 523,
            customerName: 'SARA inc'

        },
        {
            id: 6,
            orderId: 3025,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Hold,
            comment: 'waiting for the customer approval',
            customerId: 523,
            customerName: 'SARA inc'
        },
        {
            id: 7,
            orderId: 3026,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 524,
            customerName: 'Wix'
        },
        {
            id: 8,
            orderId: 3026,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Open,
            comment: 'waiting for the customer approval',
            customerId: 524,
            customerName: 'Wix'
        },
        {
            id: 9,
            orderId: 3027,
            changedBy: 'Oren S',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 10,
            orderId: 3028,
            changedBy: 'Oren S',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 11,
            orderId: 3029,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 12,
            orderId: 3029,
            changedBy: 'Oren S',
            date: new Date(),
            status: OrderStatus.Submitted,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 13,
            orderId: 3030,
            changedBy: 'Oren S',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 14,
            orderId: 3030,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Submitted,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 15,
            orderId: 3031,
            changedBy: 'Oren S',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 16,
            orderId: 3031,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Submitted,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 17,
            orderId: 3032,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 18,
            orderId: 3032,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Canceled,
            comment: 'Lack of equipment',
            customerId: 525,
            customerName: 'AMAN'
        },
        {
            id: 19,
            orderId: 3033,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Open,
            comment: '',
            customerId: 525,
            customerName: 'Wix'
        },
        {
            id: 20,
            orderId: 3033,
            changedBy: 'Nati A',
            date: new Date(),
            status: OrderStatus.Canceled,
            comment: 'Lack of equipment',
            customerId: 525,
            customerName: 'Wix'
        }
    ];

    public static getOrderChangeLogs(): Observable<OrderChangeLog[]> {
        return of(this.orderChangeLogList);
    }
}
