import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {}

export interface Customer {
    id: number;
    name: string;
    email: string;
}
  