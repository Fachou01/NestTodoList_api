import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoAppModule } from './todo-app/todo-app.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [TodoAppModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
