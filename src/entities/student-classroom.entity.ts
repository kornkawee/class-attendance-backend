import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from './student.entity';
import { Classroom } from './classroom.entity';

@Entity({ name: 'student_classroom' })
export class StudentClassroom {
  @PrimaryGeneratedColumn({ name: 'student_classroom_id' })
  student_classroom_id: number;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'studentid' })
  student: Student;

  @ManyToOne(() => Classroom)
  @JoinColumn({ name: 'classroomid' })
  classroom: Classroom;
}
