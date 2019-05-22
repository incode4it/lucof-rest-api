import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateTaskDto {

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(1, 128)
  readonly title: string;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly online: boolean;

  @ApiModelProperty()
  readonly location: string;

  @ApiModelProperty()
  readonly category: string;

  @ApiModelProperty()
  readonly budget: string;

}
