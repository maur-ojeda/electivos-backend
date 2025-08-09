import { IsString } from 'class-validator';

export class CreateStudentCourseDto {
    @IsString()
    studentId: string;

    @IsString()
    courseId: string;
}