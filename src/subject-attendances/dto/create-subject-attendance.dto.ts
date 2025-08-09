// src/subject-attendances/dto/create-subject-attendance.dto.ts
import { IsString, IsOptional, IsIn, IsBoolean } from 'class-validator';

export class CreateSubjectAttendanceDto {
    @IsString()
    subjectId: string;

    @IsString()
    studentId: string;

    @IsOptional()
    @IsString()
    attendedAt?: string;

    @IsString()
    @IsIn(['present', 'absent', 'justified'])
    status: string;

    @IsOptional()
    @IsBoolean()
    wasLate?: boolean;

    @IsOptional()
    @IsString()
    notes?: string;
}
