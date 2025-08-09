import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectAttendanceDto } from './create-subject-attendance.dto';

export class UpdateSubjectAttendanceDto extends PartialType(CreateSubjectAttendanceDto) {}
