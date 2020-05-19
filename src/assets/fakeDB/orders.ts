import { Observable, of } from 'rxjs';
import { OrderStatus } from 'src/app/components/orders/models/order-status-enum.model';
import { Order } from 'src/app/components/orders/models/order.model';

export class OrdersFakeDB {

    public static orderList: Order[] = [
        {
            id: 3022,
            status: OrderStatus.Open,
            description: 'Order 1',
            customer: {
                id: 522,
                address: {
                    city: 'Rehovot',
                    country: 'Israel',
                    street: '3 Fimlr tr',
                    zip: 76403
                },
                name: 'a.a pilony',
                contactDetails: {
                    name: 'Ronit Atias',
                    mail: 'ronit.a@aapilony.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3023,
            status: OrderStatus.Canceled,
            description: 'Order 2',
            customer: {
                id: 522,
                address: {
                    city: 'Rehovot',
                    country: 'Israel',
                    street: '3 Fimlr tr',
                    zip: 76403
                },
                name: 'a.a pilony',
                contactDetails: {
                    name: 'Ronit Atias',
                    mail: 'ronit.a@aapilony.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3024,
            status: OrderStatus.Open,
            description: 'Food for soldier',
            customer: {
                id: 523,
                address: {
                    city: 'Yavne',
                    country: 'Israel',
                    street: '3 Hertzel st',
                    zip: 76403
                },
                name: 'SARA inc',
                contactDetails: {
                    name: 'Ron Gil',
                    mail: 'ron.g@sara.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3025,
            status: OrderStatus.Hold,
            description: 'Food for soldier',
            customer: {
                id: 523,
                address: {
                    city: 'Yavne',
                    country: 'Israel',
                    street: '3 Hertzel st',
                    zip: 76403
                },
                name: 'SARA inc',
                contactDetails: {
                    name: 'Ron Gil',
                    mail: 'ron.g@sara.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3026,
            status: OrderStatus.Hold,
            description: 'Food for soldier',
            customer: {
                id: 524,
                address: {
                    city: 'Tel Aviv',
                    country: 'Israel',
                    street: '3 Elipelet st',
                    zip: 76403
                },
                name: 'Wix',
                contactDetails: {
                    name: 'Michal Shnaider',
                    mail: 'michal.s@wix.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3027,
            status: OrderStatus.Open,
            description: 'Monitors',
            customer: {
                id: 525,
                address: {
                    city: 'Kfar Sava',
                    country: 'Israel',
                    street: '3 Hertzel st',
                    zip: 76403
                },
                name: 'AMAN',
                contactDetails: {
                    name: 'Yossi Bol',
                    mail: 'yossi.b@aman.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3028,
            status: OrderStatus.Open,
            description: 'Laptops',
            customer: {
                id: 525,
                address: {
                    city: 'Kfar Sava',
                    country: 'Israel',
                    street: '3 Elipelet st',
                    zip: 76403
                },
                name: 'AMAN',
                contactDetails: {
                    name: 'Yossi Bol',
                    mail: 'yossi.b@aman.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3029,
            status: OrderStatus.Submitted,
            description: 'Office Logistics',
            customer: {
                id: 525,
                address: {
                    city: 'Kfar Sava',
                    country: 'Israel',
                    street: '3 Elipelet st',
                    zip: 76403
                },
                name: 'AMAN',
                contactDetails: {
                    name: 'Yossi Bol',
                    mail: 'yossi.b@aman.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3030,
            status: OrderStatus.Submitted,
            description: 'Office Logistics',
            customer: {
                id: 525,
                address: {
                    city: 'Kfar Sava',
                    country: 'Israel',
                    street: '3 Elipelet st',
                    zip: 76403
                },
                name: 'AMAN',
                contactDetails: {
                    name: 'Yossi Bol',
                    mail: 'yossi.b@aman.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        },
        {
            id: 3031,
            status: OrderStatus.Submitted,
            description: 'Office Logistics',
            customer: {
                id: 525,
                address: {
                    city: 'Kfar Sava',
                    country: 'Israel',
                    street: '3 Elipelet st',
                    zip: 76403
                },
                name: 'AMAN',
                contactDetails: {
                    name: 'Yossi Bol',
                    mail: 'yossi.b@aman.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        }
        ,
        {
            id: 3032,
            status: OrderStatus.Canceled,
            description: 'Office Logistics',
            customer: {
                id: 524,
                address: {
                    city: 'Tel Aviv',
                    country: 'Israel',
                    street: '3 Elipelet st',
                    zip: 76403
                },
                name: 'Wix',
                contactDetails: {
                    name: 'Michal Shnaider',
                    mail: 'michal.s@wix.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        }
        ,
        {
            id: 3033,
            status: OrderStatus.Canceled,
            description: 'Office Logistics',
            customer: {
                id: 524,
                address: {
                    city: 'Tel Aviv',
                    country: 'Israel',
                    street: '3 Elipelet st',
                    zip: 76403
                },
                name: 'Wix',
                contactDetails: {
                    name: 'Michal Shnaider',
                    mail: 'michal.s@wix.com',
                    phone: '054-5411740'
                }
            },
            lastUpdateDate: new Date()
        }
    ];

    public static getOrderList(): Observable<Order[]> {
        return of(this.orderList);
    }
}
