import { OrderStatus } from './order-status-enum.model';

export interface OrderChangeLog {
    id?: number;
    orderId: number;
    status: OrderStatus;
    date: Date;
    changedBy: string;
    comment?: string;
    customerName: string;
    customerId: number;
}
