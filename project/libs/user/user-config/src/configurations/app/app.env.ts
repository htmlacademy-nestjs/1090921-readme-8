import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  validateOrReject,
} from 'class-validator';

const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

export type Environment = (typeof ENVIRONMENTS)[number];

export class AppConfiguration {
  @IsString()
  @IsIn(ENVIRONMENTS)
  public environment: Environment;

  @IsNumber()
  @IsOptional()
  public port: number;

  public async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
