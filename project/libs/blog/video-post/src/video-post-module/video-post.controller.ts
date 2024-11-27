import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { VideoPostService } from './video-post.service';
import { CreateVideoPostDto } from './dto/create-video-post.dto';
import { UpdateVideoPostDto } from './dto/update-video-post.dto';

@Controller('videos')
export class VideoPostController {
  constructor(private readonly videoPostService: VideoPostService) {}

  @Post('')
  public async create(@Body() dto: CreateVideoPostDto) {
    // const newVideo = await this.videoPostService.create(dto);
    return 'To be implemented'
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateVideoPostDto) {
    // const video = await this.videoPostService.updateById(id);
    return 'To be implemented';
  }
}
