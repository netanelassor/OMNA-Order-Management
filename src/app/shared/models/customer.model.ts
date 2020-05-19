import { Address } from './address.model';

export interface Customer {
    id: number;
    name: string;
    address: Address;
    contactDetails: {
        name: string;
        mail: string;
        phone: string
    };
}



