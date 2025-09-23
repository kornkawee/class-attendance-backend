import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly svc: StudentService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.svc.findAll(query);
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
    return this.svc.remove(+id);
  }
}
