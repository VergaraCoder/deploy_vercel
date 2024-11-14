import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:"jhonatan"})
    @IsNotEmpty()
    @IsString()
    name:string;

    @ApiProperty({example:"jhonatan@Gmail.com"})
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ApiProperty({example:"jhonatan123"})
    @IsNotEmpty()
    @IsString()
    password:string;

    @ApiProperty({example:"admin"})
    @IsNotEmpty()
    @IsString()
    roleName:string;
}
