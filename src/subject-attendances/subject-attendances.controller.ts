import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectAttendancesService } from './subject-attendances.service';
import { CreateSubjectAttendanceDto } from './dto/create-subject-attendance.dto';
import { UpdateSubjectAttendanceDto } from './dto/update-subject-attendance.dto';

@Controller('subject-attendances')
export class SubjectAttendancesController {
  constructor(private readonly subjectAttendancesService: SubjectAttendancesService) { }

  @Post()
  create(@Body() createSubjectAttendanceDto: CreateSubjectAttendanceDto) {
    return this.subjectAttendancesService.create(createSubjectAttendanceDto);
  }

  @Get()
  findAll() {
    return this.subjectAttendancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectAttendancesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectAttendanceDto: UpdateSubjectAttendanceDto) {
    return this.subjectAttendancesService.update(id, updateSubjectAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectAttendancesService.remove(id);
  }
}
