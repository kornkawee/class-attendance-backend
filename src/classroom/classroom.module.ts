import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from '../entities/classroom.entity';
import { StudentClassroom } from '../entities/student-classroom.entity';
import { Student } from 'src/entities/student.entity';

import { ClassroomController } from './classroom.controller';
import { ClassroomService } from './classroom.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Classroom, StudentClassroom])
    // TypeOrmModule.forFeature([Classroom, StudentClassroom, Student]),
  ],
  controllers: [ClassroomController],
  providers: [ClassroomService]
})
export class ClassroomModule {}
