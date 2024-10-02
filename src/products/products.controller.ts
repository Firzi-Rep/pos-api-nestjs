import { Controller, Get, Post, Body, Param, Put, Delete, ValidationPipe} from '@nestjs/common';
import { ProductsService, Product } from './products.service';
import { CreateProductDto } from './create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createProductDto: CreateProductDto): Product {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Product {
    return this.productsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedProduct: Product): Product {
    return this.productsService.update(Number(id), updatedProduct);
  }

  @Delete(':id')
  remove(@Param('id') id: number): boolean {
    return this.productsService.remove(Number(id));
  }
}
