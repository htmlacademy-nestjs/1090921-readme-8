import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
    public id!: string;
    
  @Expose()
    public registration_date!: string;

  @Expose()
    public publication_count!: number;

  @Expose()
    public followers_count!: number;

  @Expose()
    public name!: string;

  @Expose()
    public avatar!: string;

  @Expose()
    public email!: string;
}
