import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTeacherDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    email?: string;
}
