import { Module } from '@nestjs/common';

import { VideoPostModule } from '@project/video-post'

import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';

@Module({
  imports: [VideoPostModule],
  providers: [BlogPostService],
  controllers: [BlogPostController],
})
export class BlogPostModule {}
