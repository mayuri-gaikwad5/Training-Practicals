import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [AuthModule],
  controllers: [ProfileController],
})
export class ProfileModule {}