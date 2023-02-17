import { Repository, EntityRepository } from 'typeorm';
import { Coffee } from '../entities/coffee.entity';

@EntityRepository(Coffee)
export class CoffeesRepository extends Repository<Coffee> {}
