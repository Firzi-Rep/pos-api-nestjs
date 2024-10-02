import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    create(product: Product): Product {
        this.products.push(product);
        return product;
    }

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: number): Product {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    update(id: number, updatedProduct: Product): Product {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        this.products[index] = updatedProduct;
        return updatedProduct;
    }

    remove(id: number): boolean {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        this.products.splice(index, 1);
        return true;
    }
}

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}