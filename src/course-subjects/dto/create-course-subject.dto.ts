import { IsString } from 'class-validator';

export class CreateCourseSubjectDto {
    @IsString()
    courseId: string;

    @IsString()
    subjectId: string;
}