import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { UserModule } from './user/user.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./user/entity/user.entity.js";
import { AuthController } from './auth/auth.controller.js';
import { AuthModule } from './auth/auth.module.js';
import { ProfileModule } from './profile/profile.module.js';

@Module({
    controllers:[AppController],
    imports:[UserModule ,
        TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'mahadev',
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    }),
        AuthModule,
        ProfileModule
]
})
export class AppModule {}
