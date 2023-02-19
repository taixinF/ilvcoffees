import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

//decorators（n:装饰器)
//nest makes (extensive use of)(广泛使用) decorators
@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      //如何在类型的帮助下转换为数据库表和模式 也可以明确的加载单个实体 也可以说是自动加载单个实体 然后他们会为你找到这些实体文件并未你加载他们
      autoLoadEntities: true,
      // 始终保持你的数据库模式同步
      synchronize: true,
    }),
  ],
  controllers: [AppController], //controller : controls the invocation of the service
  providers: [AppService], //create more services to facilitate isolation
})
export class AppModule {}
