import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateReservationDto {
    @ApiProperty({example:""})
    @IsNotEmpty()
    @IsNumber()
    userId:number;

    @ApiProperty({example:""})
    @IsNotEmpty()
    @IsNumber()
    roomId:number;


    @ApiProperty({example:30})
    @IsNotEmpty()
    @IsNumber()
    minutesReserved:number;
}
