import { IsArray, IsEmail, IsString, IsNotEmpty, ArrayNotEmpty } from 'class-validator';
export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()

    @IsNotEmpty()
    email: string;

    @IsArray()
    @ArrayNotEmpty() // si no se permite un array vacío
    @IsString({ each: true }) // valida que cada item sea string
    courses: string[];
}

