import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [DatabaseModule, CoursesModule],
})
export class AppModule {}
