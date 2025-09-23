import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClassroomService } from './classroom.service';

@Controller('classrooms')
export class ClassroomController {
  constructor(private readonly svc: ClassroomService) {}

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.svc.findOne(+id);
  }

  @Post()
  create(@Body() body: any) {
    return this.svc.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.svc.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.svc.delete(+id);
  }

  @Post(':id/students') // เพิ่มนักเรียนเข้าห้อง (รับ body.studentIds = [1,2,3])
  addStudents(@Param('id') id: number, @Body() body: any) {
    const studentIds = body.studentIds || [];
    return this.svc.addStudents(+id, studentIds);
  }

  @Delete(':id/students/:studentId')
  removeStudent(@Param('id') id: number, @Param('studentId') studentId: number) {
    return this.svc.removeStudent(+id, +studentId);
  }

  @Get(':id/students')
  listStudents(@Param('id') id: number) {
    return this.svc.listStudentsInClass(+id);
  }
}
