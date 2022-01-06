import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskStatusDto {
  @ApiProperty({
    example: TaskStatus.OPEN,
    enum: TaskStatus,
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
