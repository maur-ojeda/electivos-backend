import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { PeriodsService } from './periods/periods.service';
import { PeriodsModule } from './periods/periods.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { StudentCoursesModule } from './student-courses/student-courses.module';
import { CourseSubjectsModule } from './course-subjects/course-subjects.module';
import { SubjectAttendancesModule } from './subject-attendances/subject-attendances.module';

@Module({
  imports: [DatabaseModule, CoursesModule, StudentsModule, TeachersModule, PeriodsModule, EnrollmentsModule, StudentCoursesModule, CourseSubjectsModule, SubjectAttendancesModule],
  providers: [PeriodsService],
})
export class AppModule {}
