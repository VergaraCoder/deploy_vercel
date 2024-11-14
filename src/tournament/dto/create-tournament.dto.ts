import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateTournamentDto {
    @ApiProperty({example:"codigos"})
    @IsNotEmpty()
    @IsString()
    name:string;

    @ApiProperty({example:"Solo numeros pares"})
    @IsNotEmpty()
    quantityPeople:number;

    @ApiProperty({example:0})
    @IsNotEmpty()
    currentNumberParticipants:number;

    @ApiProperty({example:"2024/10/20"})
    @IsNotEmpty()
    @IsDate()
    endStart:Date;


    @ApiProperty({example:"2024/10/18"})
    @IsNotEmpty()
    @IsDate()
    dateLimitIncription:Date;

}
