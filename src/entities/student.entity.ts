import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Prefix } from './prefix.entity';
import { Gender } from './gender.entity';
import { Gradelevel } from './gradelevel.entity';

@Entity({ name: 'student' })
export class Student {
  @PrimaryGeneratedColumn({ name: 'studentid' })
  studentid: number;

  @ManyToOne(() => Prefix, { nullable: true })
  @JoinColumn({ name: 'prefixid' })
  prefix: Prefix;

  @Column({ name: 'firstname' })
  firstname: string;

  @Column({ name: 'lastname' })
  lastname: string;

  @ManyToOne(() => Gender, { nullable: true })
  @JoinColumn({ name: 'genderid' })
  gender: Gender;

  @Column({ name: 'birthdate', type: 'date' })
  birthdate: string;

  @ManyToOne(() => Gradelevel, { nullable: true })
  @JoinColumn({ name: 'gradelevelid' })
  gradelevel: Gradelevel;
}
