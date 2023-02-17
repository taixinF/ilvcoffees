import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesRepository } from './repositorys/coffees.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CoffeesRepository])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
