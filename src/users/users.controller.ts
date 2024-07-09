import { Controller, Patch, Param, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Patch('status')
  async updateStatus(@Request() req, @Body() updateUserStatusDto: UpdateUserStatusDto) {
    return this.usersService.updateStatus(req.user.userId, updateUserStatusDto);
  }
}