import { Module } from '@nestjs/common';

import { VideoPostModule } from '@project/video-post';
import { BlogPostModule } from '@project/blog-post';

@Module({
  imports: [
    VideoPostModule,
    BlogPostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
