import { Module } from '@nestjs/common';
import { TypeormService } from './typeorm/typeorm.service';
import { PrismaService } from './prisma/prisma.service';
import { PostgresService } from './postgres/postgres.service';
import { SequilizeService } from './sequilize/sequilize.service';

@Module({
  providers: [TypeormService, PrismaService, PostgresService, SequilizeService]
})
export class ServicesModule {}
