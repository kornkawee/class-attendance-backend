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


@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'node53939-belusysdb-1.th1.proen.cloud',
      port: 11320,  
      username: 'quizdev_mm',
      password: 'Ot[TxPQ6]zrf4JKU',
      database: 'quizdev_mm',
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
