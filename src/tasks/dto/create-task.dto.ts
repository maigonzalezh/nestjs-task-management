import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Wash the car',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Wash the car with water and soap',
  })
  @IsNotEmpty()
  description: string;
}
