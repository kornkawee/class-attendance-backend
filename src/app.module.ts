import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Classroom } from './entities/classroom.entity';
import { Prefix } from './entities/prefix.entity';
import { Gender } from './entities/gender.entity';
import { Gradelevel } from './entities/gradelevel.entity';
import { StudentClassroom } from './entities/student-classroom.entity';
import { StudentModule } from './student/student.module';
import { ClassroomModule } from './classroom/classroom.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetadataModule } from './metadata/metadata.module';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),  
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Student, Classroom, Prefix, Gender, Gradelevel, StudentClassroom],
      synchronize: false, // DB มี schema แล้ว -> false
      charset: 'utf8mb4',
    }),
    StudentModule,  
    ClassroomModule,
    MetadataModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
