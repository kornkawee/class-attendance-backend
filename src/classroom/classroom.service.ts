import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classroom } from '../entities/classroom.entity';
import { StudentClassroom } from '../entities/student-classroom.entity';
import { Student } from '../entities/student.entity';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom) private clsRepo: Repository<Classroom>,
    @InjectRepository(StudentClassroom) private scRepo: Repository<StudentClassroom>,
  ) {}

  // Classroom CRUD
  findAll(): Promise<Classroom[]> {
    return this.clsRepo.find();
  }

  findOne(id: number): Promise<Classroom | null> {
    return this.clsRepo.findOne({ where: { classroomid: id } });
  }

  create(payload: Partial<Classroom>): Promise<Classroom> {
    const item = this.clsRepo.create(payload);
    return this.clsRepo.save(item);
  }

  update(id: number, payload: Partial<Classroom>): Promise<any> {
    return this.clsRepo.update({ classroomid: id }, payload);
  }

  delete(id: number): Promise<any> {
    return this.clsRepo.delete({ classroomid: id });
  }

  // Student-Classroom management
  async addStudents(classroomid: number, studentIds: number[]): Promise<StudentClassroom[]> {
    const inserted: StudentClassroom[] = [];
    for (const sid of studentIds) {
      // check duplicate
      const exists = await this.scRepo.findOne({
        where: {
          student: { studentid: sid } as Partial<Student>,
          classroom: { classroomid } as Partial<Classroom>,
        },
        relations: ['student', 'classroom'],
      });
      if (!exists) {
        const sc = this.scRepo.create({
          student: { studentid: sid } as Partial<Student>,
          classroom: { classroomid } as Partial<Classroom>,
        });
        inserted.push(await this.scRepo.save(sc));
      }
    }
    return inserted;
  }

  async removeStudent(classroomid: number, studentid: number): Promise<any> {
    return this.scRepo.delete({
      classroom: { classroomid } as Partial<Classroom>,
      student: { studentid } as Partial<Student>,
    });
  }

  async listStudentsInClass(classroomid: number): Promise<StudentClassroom[]> {
    return this.scRepo.find({
      where: {
        classroom: { classroomid } as Partial<Classroom>,
      },
      relations: ['student', 'student.prefix', 'student.gender', 'student.gradelevel'],
    });
  }
}
