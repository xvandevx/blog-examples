import { Controller, Get, Request } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('catalog')
export class CatalogController {
  constructor() {}

  @Get()
  getItems(@Request() req: any) {
    return [{
      name: 'Product 1',
      id: 1,
    }, {
      name: 'Product 2',
      id: 2,
    }];
  }
}
