import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoAppModule } from './todo-app/todo-app.module';
import { UserModule } from './user/user.module';
import { ComapignsController } from './comapigns/comapigns.controller';
import { ComapignsModule } from './comapigns/comapigns.module';
import {ComapignsService} from "./comapigns/comapigns.service";


@Module({
  imports: [TodoAppModule, UserModule, ComapignsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
