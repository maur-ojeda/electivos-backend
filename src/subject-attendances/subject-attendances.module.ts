import { Module } from '@nestjs/common';
import { SubjectAttendancesService } from './subject-attendances.service';
import { SubjectAttendancesController } from './subject-attendances.controller';

@Module({
  controllers: [SubjectAttendancesController],
  providers: [SubjectAttendancesService],
})
export class SubjectAttendancesModule {}
