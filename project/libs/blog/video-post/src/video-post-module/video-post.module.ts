import { Module } from '@nestjs/common';

import { VideoPostRepository } from './video-post.repository';
import { VideoPostFactory } from './video-post.factory';
import { VideoPostController } from './video-post.controller';
import { VideoPostService } from './video-post.service';

@Module({
  providers: [VideoPostRepository, VideoPostFactory, VideoPostService],
  controllers: [VideoPostController],
  exports: [VideoPostRepository],
})
export class VideoPostModule {}
