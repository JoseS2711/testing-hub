import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Example1Module } from './example1/example1.module';
import { MmgvoService } from './mmgvo/mmgvo.service';
import { CabronResolver } from './cabron/cabron.resolver';

@Module({
  imports: [Example1Module],
  controllers: [AppController],
  providers: [AppService, MmgvoService, CabronResolver],
})
export class AppModule {

  
}
