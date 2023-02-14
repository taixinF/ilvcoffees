import { Controller, Get, Param, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll() {
    // return `This action return all ${id} coffees`;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return  ${id} coffees fo your find`;
    // return this.coffeesService.findAll();
  }

  @Get()
  update(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffee, limit: ${limit}, offset: ${offset}`;
  }
}
