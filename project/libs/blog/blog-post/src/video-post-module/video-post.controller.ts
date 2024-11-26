import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VideoPostService } from './video-post.service';
import { CreateVideoPostDto } from './dto/create-video-post.dto';
import { UpdateVideoPostDto } from './dto/update-video-post.dto';

@Controller('videos')
export class VideoPostController {
  constructor(private readonly videoPostService: VideoPostService) {}

  @Get('')
  public async index() {
    // const newVideo = await this.videoPostService.find();
    return 'To be implemented (with pagination, sorting and filtering by tags and name)'
  }

  @Post('')
  public async create(@Body() dto: CreateVideoPostDto) {
    // const newVideo = await this.videoPostService.create(dto);
    return 'To be implemented'
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    // const existingVideo = await this.videoPostService.findById(id);
    return 'To be implemented';
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateVideoPostDto) {
    // const video = await this.videoPostService.updateById(id);
    return 'To be implemented';
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    // const video = await this.videoPostService.deleteById(id);
    return 'To be implemented';
  }

  // TODO: implement comments, likes, repost, feed, image uploading
}
