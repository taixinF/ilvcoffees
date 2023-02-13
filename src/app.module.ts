import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';

//decorators（n:装饰器)
//nest makes (extensive use of)(广泛使用) decorators
@Module({
  imports: [],
  controllers: [AppController, CoffeesController], //controller : controls the invocation of the service
  providers: [AppService],
})
export class AppModule {}