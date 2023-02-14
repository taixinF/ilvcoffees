import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
//the controller that handles a particular(adj:特定的) request
export class AppController {
  //这也是service 注入的方法
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
