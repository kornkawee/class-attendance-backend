import { Controller, Get } from '@nestjs/common';
import { MetadataService } from './metadata.service';

@Controller()
export class MetadataController {
  constructor(private readonly svc: MetadataService) {}

  @Get('prefix')        // GET /prefix
  getPrefixes() {
    return this.svc.getPrefixes();
  }

  @Get('gender')        // GET /gender
  getGenders() {
    return this.svc.getGenders();
  }

  @Get('gradelevel')    // GET /gradelevel
  getGradelevels() {
    return this.svc.getGradelevels();
  }

  @Get('metadata')      // GET /metadata  -> returns all three
  getAll() {
    return this.svc.getAll();
  }
}
