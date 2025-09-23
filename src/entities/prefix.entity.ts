import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'prefix' })
export class Prefix {
  @PrimaryGeneratedColumn({ name: 'prefixid' })
  prefixid: number;

  @Column({ name: 'prefixname' })
  prefixname: string;
}
