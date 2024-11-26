import { PostState, PostType } from '@project/core';
import { Expose, Type } from 'class-transformer';
import { ShortUserRdo } from '@project/authentication'

// TODO: extend with data of specific post type
export class PostRdo {
  @Expose()
  public id!: string;

  @Expose()
  public type!: PostType;

  @Expose()
  public state: PostState

  @Expose()
  public likes_count!: number;

  @Expose()
  public comments_count!: number;

  @Expose()
  public publication_date!: string;

  @Expose()
  @Type(() => ShortUserRdo)
  public author: ShortUserRdo;

  @Expose()
  public is_quote: boolean
}