import { Controller, Get, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  update(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffee, limit: ${limit}, offset: ${offset}`;
  }
}
