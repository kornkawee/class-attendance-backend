import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prefix } from '../entities/prefix.entity';
import { Gender } from '../entities/gender.entity';
import { Gradelevel } from '../entities/gradelevel.entity';
import { MetadataController } from './metadata.controller';
import { MetadataService } from './metadata.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prefix, Gender, Gradelevel])],
  controllers: [MetadataController],
  providers: [MetadataService],
  exports: [MetadataService],
})
export class MetadataModule {}
