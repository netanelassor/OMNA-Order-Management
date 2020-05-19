import { Customer } from 'src/app/shared/models/customer.model';
import { OrderStatus } from './order-status-enum.model';

export interface Order {
    id: number;
    description: string;
    customer: Customer;
    status: OrderStatus;
    lastUpdateDate: Date;
}


