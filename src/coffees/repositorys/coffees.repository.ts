import { Entity, Repository, EntityRepository } from 'typeorm';
import { Coffee } from '../entities/coffee.entity';

@EntityRepository()
export class CoffeesRepository extends Repository<Coffee> {}
