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

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Coffee> {
    return this.coffeesService.findOne(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action return  ${id} coffees fo your find`;
  //   // return this.coffeesService.findOne(id);
  // }
  // @Get()
  // findAll() {
  //   return `This action return all  coffees`;
  //   // return this.coffeesService.findAll();
  // }
  //
  // @Post()
  // create(@Body() createCoffeeDto: CreateCoffeeDto) {
  //   return createCoffeeDto;
  //   // return this.coffeesService.create(createCoffeeDto);
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
