## nest 基础使用

### 指令：

> nest generate controller '控制器名称'

- 简写：nest g co '控制器名称' 根文件会自动生成

> nest g co --no-spec

- 不用生成测试文件

> nest g co modules/abc --dry-run

### 文件基础认识

#### main.js

```ts
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    //NestFactory.create('模块文件')
    const app = await NestFactory.create(AppModule);
    //监听端口
    await app.listen(3000);
}

bootstrap();

```

#### app.module.ts

```javascript
import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CoffeesController} from './coffees/coffees.controller';

//decorators（n:装饰器)
//nest makes (extensive use of)(广泛使用) decorators
@Module({
    imports: [],
    controllers: [AppController, CoffeesController], //controller : controls the invocation of the service
    providers: [AppService],
})
export class AppModule {
}

```

#### controllers 自定义控制器

```ts
import {Controller, Get} from '@nestjs/common';

//'可传入参数'
@Controller('coffees')
export class CoffeesController {
    //装饰器 请求类型
    @Get('???')
    findAll() {
        return 'all coffee';
    }
}
```

- 路由还可以通过Get('参数') 进行拼接访问
