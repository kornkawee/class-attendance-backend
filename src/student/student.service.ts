import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Student } from '../entities/student.entity';
import { Prefix } from '../entities/prefix.entity';
import { Gender } from '../entities/gender.entity';
import { Gradelevel } from '../entities/gradelevel.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private repo: Repository<Student>
  ) {}

  async findAll(query?: any) {
    const qb = this.repo.createQueryBuilder('s')
      .leftJoinAndSelect('s.prefix', 'prefix')
      .leftJoinAndSelect('s.gender', 'gender')
      .leftJoinAndSelect('s.gradelevel', 'gradelevel');

    if (query?.studentid) qb.andWhere('s.studentid = :id', { id: query.studentid });
    if (query?.name) qb.andWhere('(s.firstname LIKE :name OR s.lastname LIKE :name)', { name: `%${query.name}%` });
    if (query?.gradelevelid) qb.andWhere('gradelevel.gradelevelid = :g', { g: query.gradelevelid });

    return qb.getMany();
  }

  async findOne(id: number) {
    return this.repo.findOne({ where: { studentid: id }, relations: ['prefix','gender','gradelevel'] });
  }

  async create(payload: any) {
    // payload may contain prefixid, genderid, gradelevelid as numbers
    const student = this.repo.create({
      firstname: payload.firstname,
      lastname: payload.lastname,
      birthdate: payload.birthdate,
    });

    if (payload.prefixid) (student as any).prefix = { prefixid: payload.prefixid };
    if (payload.genderid) (student as any).gender = { genderid: payload.genderid };
    if (payload.gradelevelid) (student as any).gradelevel = { gradelevelid: payload.gradelevelid };

    return this.repo.save(student);
  }

  async update(id: number, payload: any) {
    const partial: any = {
      firstname: payload.firstname,
      lastname: payload.lastname,
      birthdate: payload.birthdate,
    };
    if (payload.prefixid) partial.prefix = { prefixid: payload.prefixid };
    if (payload.genderid) partial.gender = { genderid: payload.genderid };
    if (payload.gradelevelid) partial.gradelevel = { gradelevelid: payload.gradelevelid };

    await this.repo.update({ studentid: id }, partial);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.repo.delete({ studentid: id });
  }
}
