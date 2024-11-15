import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

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

    @ApiProperty({
        example: "2024-11-14T09:30:12Z",  
        type: String
      })
    @IsNotEmpty()
    dateReservation:string;
}
