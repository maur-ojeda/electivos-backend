import { Module } from '@nestjs/common';
import { CourseSubjectsService } from './course-subjects.service';
import { CourseSubjectsController } from './course-subjects.controller';

@Module({
  controllers: [CourseSubjectsController],
  providers: [CourseSubjectsService],
})
export class CourseSubjectsModule {}
