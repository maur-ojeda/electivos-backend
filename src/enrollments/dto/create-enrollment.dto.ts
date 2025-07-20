import { IsString, IsNotEmpty, IsOptional, IsDate, IsBoolean } from 'class-validator';  
import { Type } from 'class-transformer';

export class CreateEnrollmentDto {
    @IsString()
    @IsNotEmpty()
    courseId: string;

    @IsString()
    @IsNotEmpty()
    studentId: string;

    @IsOptional()
    @IsString()
    additionalInfo?: string;

    @IsDate()
    @Type(() => Date)
    createdAt: Date;

    @IsOptional()
    @IsBoolean()
    status?: boolean;
}
