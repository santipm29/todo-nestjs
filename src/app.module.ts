import { TypeORMConfig } from './config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig), TasksModule],
})
export class AppModule {}
