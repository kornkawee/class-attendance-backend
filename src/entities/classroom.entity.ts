import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'classroom' })
export class Classroom {
  @PrimaryGeneratedColumn({ name: 'classroomid' })
  classroomid: number;

  @Column({ name: 'classname' })
  classname: string;

  @Column({ name: 'academic_year', type: 'year' })
  academic_year: string;

  @Column({ name: 'homeroom_teacher' })
  homeroom_teacher: string;
}
