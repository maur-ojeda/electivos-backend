import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { PeriodsService } from './periods/periods.service';
import { PeriodsModule } from './periods/periods.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';

@Module({
  imports: [DatabaseModule, CoursesModule, StudentsModule, TeachersModule, PeriodsModule, EnrollmentsModule],
  providers: [PeriodsService],
})
export class AppModule {}
