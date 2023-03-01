import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CoffeesRepository } from './repositorys/coffees.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    //仓库将将被我们注入在服务器中
    @InjectRepository(CoffeesRepository)
    private coffeesRepository: CoffeesRepository,
  ) {}

  // 只要你与数据库交互就是一个异步操作
  // 既然我们使用了承诺Coffee 我们就要返回一个Coffee
  // 最大的特点是必须是异步操作
  // 数据库查找得像下面这样{where:{}}
  async findOne(id: string): Promise<Coffee> {
    const found = await this.coffeesRepository.findOne({
      where: {
        id,
      },
    });
    if (!found) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return found;
  }

  async createCoffee(createCoffeeDto: CreateCoffeeDto) {
    return createCoffeeDto;
  }
}
