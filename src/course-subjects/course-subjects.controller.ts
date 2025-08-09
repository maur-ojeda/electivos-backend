import { Controller, Get, Post, Body } from '@nestjs/common';
import { CourseSubjectsService } from './course-subjects.service';
import { CreateCourseSubjectDto } from './dto/create-course-subject.dto';


@Controller('course-subjects')
export class CourseSubjectsController {
  constructor(private readonly courseSubjectsService: CourseSubjectsService) { }

  @Post()
  create(@Body() createCourseSubjectDto: CreateCourseSubjectDto) {
    return this.courseSubjectsService.create(createCourseSubjectDto);
  }

  @Get()
  findAll() {
    return this.courseSubjectsService.findAll();
  }

}

