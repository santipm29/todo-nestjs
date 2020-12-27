import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeORMConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: TypeORMConfig,
    }),
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
