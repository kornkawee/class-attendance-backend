import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prefix } from '../entities/prefix.entity';
import { Gender } from '../entities/gender.entity';
import { Gradelevel } from '../entities/gradelevel.entity';

@Injectable()
export class MetadataService {
  constructor(
    @InjectRepository(Prefix) private prefixRepo: Repository<Prefix>,
    @InjectRepository(Gender) private genderRepo: Repository<Gender>,
    @InjectRepository(Gradelevel) private gradeRepo: Repository<Gradelevel>,
  ) {}

  getPrefixes() {
    return this.prefixRepo.find({ order: { prefixid: 'ASC' } });
  }

  getGenders() {
    return this.genderRepo.find({ order: { genderid: 'ASC' } });
  }

  getGradelevels() {
    return this.gradeRepo.find({ order: { gradelevelid: 'ASC' } });
  }

  // Optional combined endpoint
  async getAll() {
    const [prefixes, genders, grades] = await Promise.all([
      this.getPrefixes(),
      this.getGenders(),
      this.getGradelevels(),
    ]);
    return { prefixes, genders, gradelevels: grades };
  }
}
