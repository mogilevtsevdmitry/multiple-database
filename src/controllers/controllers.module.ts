import { Module } from '@nestjs/common';
import { TypeormController } from './typeorm/typeorm.controller';
import { PrismaController } from './prisma/prisma.controller';
import { PostgresController } from './postgres/postgres.controller';
import { SequilizeController } from './sequilize/sequilize.controller';

@Module({
  controllers: [TypeormController, PrismaController, PostgresController, SequilizeController]
})
export class ControllersModule {}
