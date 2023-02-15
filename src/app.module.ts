import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

//decorators（n:装饰器)
//nest makes (extensive use of)(广泛使用) decorators
@Module({
  imports: [CoffeesModule],
  controllers: [AppController], //controller : controls the invocation of the service
  providers: [AppService], //create more services to facilitate isolation
})
export class AppModule {}
