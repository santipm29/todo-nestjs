import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 6603,
  username: 'root',
  password: 'root',
  database: 'TaskManagement',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
