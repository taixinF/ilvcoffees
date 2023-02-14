### 8. User router parameters

```ts
import {Controller, Get} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('index')
    findAll() {
        return 'this action returns all coffees';
    }

    //动态传入参数
    @Get(':id')
    //使用装饰器 并对其命名
    // params 可以让我们获取所有传入的请求参数 并且在函数体中使用
    findOne(@Param() params) {
        //通过重命名 访问其中传入的参数
        return `This action returns #${params.id} coffee`;
    }

    //@Param也可以通过传入一个String访问特定的参数 
    findOne(@Param('id') id: String) {
        //通过重命名 访问其中传入的参数
        return `This action returns #${id} coffee`;
    }


}
```

#### 装饰器

- `@Param()` 可以让我们获取所有传入的请求参数 并且在函数体中使用

### 9. Handing Request Body Payload(n:负载) POST

```ts
@Controller('coffees')
export class CoffeesController {
//...
    @Post()
    create(@Body() body) {
        //如果没有设置我们请求的body 就是我们返回body
        // If we don't set the body we're requesting we're returning the body
        return body;
    }

    @Post() //不介意 这样做  Don't mind doing that
    //也可以在@Body中置顶返回的String
    //You can also put the String returned at the top in @Body
    //指定属性会遇到我们访问特定属性时 不会验证其他属性 --- 所以谨慎使用   
    //Specifying a property will encounter that we do not validate other properties when accessing a particular property - so use caution
    create(@Body('name') body) {
        //如果没有设置我们请求的body 就是我们返回body
        //If we don't set the body we're requesting we're returning the body
        return body;
    }
}
```

#### 装饰器

- `@Post` Post请求
- `@Body` 返回所有request.body的所有或特定部分