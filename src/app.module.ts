import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Db1Prisma } from './db1.prisma';
import { Db2Prisma } from './db2.prisma';
import { DatabasesModule } from './databases/databases.module';

@Module({
  imports: [DatabasesModule],
  controllers: [AppController],
  providers: [Db1Prisma, Db2Prisma],
})
export class AppModule {}
