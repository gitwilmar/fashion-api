import { Controller, Get, Post, Query, } from '@nestjs/common';
import { BodiesService } from './bodies.service';
import { GetBodyByDate } from './dto/get-body-by-date.dto';


@Controller('sales')
export class BodiesController {
  constructor(private readonly bodiesService: BodiesService) {}

  @Post('/record')
  readCsv() {
    return this.bodiesService.readCsv();
  }

  @Get('/report')
  getBody(@Query() filterDto:GetBodyByDate) {
    if(Object.keys(filterDto).length) {
      return this.bodiesService.getBodyBydate(filterDto);
    }else{
      return this.bodiesService.findAll();
    }  
  }

}
