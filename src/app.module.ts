import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

//decorators（n:装饰器)
//nest makes (extensive use of)(广泛使用) decorators
@Module({

  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest-course')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
