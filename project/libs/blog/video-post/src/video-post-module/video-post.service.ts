import { Injectable } from '@nestjs/common';
import { VideoPostRepository } from './video-post.repository';

@Injectable()
export class VideoPostService {
  constructor(private readonly videoPostRepository: VideoPostRepository) {}
}
