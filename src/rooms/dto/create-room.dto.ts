import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRoomDto {
    @ApiProperty({example:"Hermosa habitacion con 2 vamos super comoda con aire acondicionado"})
    @IsNotEmpty()
    @IsString()
    description:string;

    @ApiProperty({example:4})
    @IsNotEmpty()
    @IsNumber()
    capacity:number;

    @ApiProperty({example:3000})
    @IsNotEmpty()
    @IsNumber()
    price:number;


    @ApiProperty({example:true})
    @IsNotEmpty()
    @IsBoolean()
    available:boolean;
}
