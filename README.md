### 8. User router parameters

**装饰器：**

- `@Param()` 可以让我们获取所有传入的请求参数 并且在函数体中使用

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

### 9. Handing Request Body Payload(n:负载) POST

**装饰器：**

- `@Post` Post请求
- `@Body` 返回所有request.body的所有或特定部分

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

### 10. Response Status Codes

_nest 默认为成功请求返回 默认使用的是express_

**状态码：**

- 成功时
    - `200` 表示 GET
    - `201` 表示 POST

**装饰器：**

- `@HttpCode` 允许我们设置一个特定的状态码
- `@Res` 访问底层响应对象 方便我们使用express 中的一些原生的方法

```ts
import {HttpCode, HttpStatus} from "@nestjs/common";

@Controller('coffees')
export class CoffeesController {
//...
    @Get()
    //使用原生的一些方法操作
    //
    findAll(@Res response) {
        response.status(200).send('This action returns all coffees')
    }

    @Post()
    //HttpStatus.后面有很多可以用的http状态码 我们选择 GOME
    @HttpCode(HttpStatus.GONE) //允许我们设置一个特定的状态码
    create(@Body() body) {

        return body;
    }
}
```

**👀👀重要提醒👀👀：**

_在底层，Nest 构建在强大的 HTTP 服务器框架上，例如 Express （默认），并且还可以通过配置从而使用 Fastify ！_

_虽然使用@Res直接操作底层 虽然这种方法很好 并且通过完全控制响应对象
在某些方面确实允许更多的灵活性 像头操作 特定功能等
但这种方法一些主要的缺点是您失去了与依赖于Nest标准响应处理的Nest功能的兼容性_

例如：
_当我们像这样使用底层响应时 应为不同的库可能响应对象上有不同的API
使用这个原生响应也会使我们的代码更难测试 应为我们必须模拟响应对象
**作为最佳实践 建议在处理响应时 因尽可能使用nest标准方法**_

### 11. Handing Update and Delete Requests

**装饰器：**

- `@Patch` 修改
- `@Delete` 删除

```ts
@Controller()
export class CoffeesController {
//    ...
    @Patch(':id')
    update(@Parms(id) id: string, @Body body) {
        return `This action updates #${id} coffee`
    }

    @Delete('id')
    remove(@Parms(id) id: string) {
        return `This action removes #${id} coffee`
    }
}
```


