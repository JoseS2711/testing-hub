import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Example1Module } from './example1/example1.module';

@Module({
  imports: [Example1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  
}
