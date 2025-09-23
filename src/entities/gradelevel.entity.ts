import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'gradelevel' })
export class Gradelevel {
  @PrimaryGeneratedColumn({ name: 'gradelevelid' })
  gradelevelid: number;

  @Column({ name: 'levelname' })
  levelname: string;
}
