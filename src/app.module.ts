import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';

//decorators（n:装饰器)
//nest makes (extensive use of)(广泛使用) decorators
@Module({
  imports: [CoffeesModule],
  controllers: [AppController, CoffeesController], //controller : controls the invocation of the service
  providers: [AppService, CoffeesService], //create more services to facilitate isolation
})
export class AppModule {}
