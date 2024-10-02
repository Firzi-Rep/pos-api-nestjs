import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {}

export interface Transaction {
    id: number;
    productId: number;
    customerId: number;
    quantity: number;
    total: number;
    date: Date;
}