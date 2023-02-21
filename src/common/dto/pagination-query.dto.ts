import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  limit: number;

  @IsOptional()
  @Type(() => Number)
  offset: number;
}
