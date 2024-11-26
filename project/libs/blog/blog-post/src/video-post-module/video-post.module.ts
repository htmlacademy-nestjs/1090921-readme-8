import { Module } from '@nestjs/common';

import { VideoPostRepository } from './video-post.repository';
import { VideoPostFactory } from './video-post.factory';
import { VideoPostController } from './video-post.controller';
import { VideoPostService } from './video-post.service';

// Вопрос: как будет правильно работать с постами разных типов?
// Предполагаю, что под каждый тип может быть свои entity, репозиторий и фабрика, но сервис и контроллер общий на все типы?
// И как лучше организовать комментирование постов - как отдельный модуль?
@Module({
  providers: [VideoPostRepository, VideoPostFactory, VideoPostService],
  controllers: [VideoPostController],
  exports: [VideoPostRepository],
})
export class VideoPostModule {}
