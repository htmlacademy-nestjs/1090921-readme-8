import { Injectable } from '@nestjs/common';
import { VideoPostRepository } from '@project/video-post';

@Injectable()
export class BlogPostService {
  constructor(private readonly videoPostRepository: VideoPostRepository) {}
}
