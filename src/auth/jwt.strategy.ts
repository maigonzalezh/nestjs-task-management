import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-paylolad.interface';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user: User = await this.usersRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
