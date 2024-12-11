import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BlogUserRepository } from './blog-user.repository';
import { BlogUserFactory } from './blog-user.factory';
import { BlogUserController } from './blog-user.controller';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  providers: [BlogUserRepository, BlogUserFactory],
  controllers: [BlogUserController],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
