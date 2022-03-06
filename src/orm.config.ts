import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config : TypeOrmModuleOptions =  {
      type: 'postgres',
      host: 'localhost',
      port: 3308,
      username: 'postgres',
      password: 'root',
      database: 'auth_db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }
