import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('index')
  findAll() {
    return 'this action returns all coffees';
  }
}