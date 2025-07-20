import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCourseDto {

  @IsInt()
  @IsNotEmpty()
  capacity: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  periodId: string;

  @IsString()
  @IsNotEmpty()
  teacherId: string;

}
