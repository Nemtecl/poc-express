import { Entity, Column, Unique } from 'typeorm';
import { Length, IsNotEmpty } from 'class-validator';
import BaseEntity from './base-entity';

@Entity()
@Unique(['username'])
export default class User extends BaseEntity {
  @Column()
  @Length(4, 20)
  username!: string;

  @Column()
  @Length(4, 100)
  password!: string;

  @Column()
  @IsNotEmpty()
  role!: string;
}
