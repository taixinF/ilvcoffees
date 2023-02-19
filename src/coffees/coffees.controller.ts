import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Coffee> {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return this.coffeesService.createCoffee(createCoffeeDto);
  }

  // @Get()
  // findAll() {
  //   return `This action return all  coffees`;
  //   // return this.coffeesService.findAll();
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
  //   return id + updateCoffeeDto + this.coffeesService;
  //   // return this.coffeesService.update(id, updateCoffeeDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return id;
  //   // return this.coffeesService.remove(id);
  // }
}
