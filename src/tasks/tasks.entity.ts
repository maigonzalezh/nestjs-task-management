import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty({
    example: 'Wash the car',
    description: 'Title of the task',
  })
  title: string;

  @Column()
  @ApiProperty({
    example: 'Wash the car with water and soap',
    description: 'Description of the task',
  })
  description: string;

  @Column()
  @ApiProperty({
    enum: TaskStatus,
    description: 'Status of the task',
    default: TaskStatus.OPEN,
  })
  status: string;
}
