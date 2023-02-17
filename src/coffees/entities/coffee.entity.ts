import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
  //主列 需要使用的传入就行了
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  flavors: string[];
}
