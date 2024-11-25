import { Expose } from 'class-transformer';

export class ShortUserRdo {
  @Expose()
  public id!: string;

  @Expose()
  public name!: string;

  @Expose()
  public email!: string;
}
