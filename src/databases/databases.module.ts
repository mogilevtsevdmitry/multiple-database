import { Module } from '@nestjs/common';
import { TypeormModule } from './typeorm/typeorm.module';
import { PostgresModule } from './postgres/postgres.module';
import { PrismaModule } from './prisma/prisma.module';
import { SequilizeModule } from './sequilize/sequilize.module';

@Module({
  imports: [TypeormModule, PostgresModule, PrismaModule, SequilizeModule]
})
export class DatabasesModule {}
