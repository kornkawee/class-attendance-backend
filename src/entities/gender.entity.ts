import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'gender' })
export class Gender {
  @PrimaryGeneratedColumn({ name: 'genderid' })
  genderid: number;

  @Column({ name: 'gendername' })
  gendername: string;
}
