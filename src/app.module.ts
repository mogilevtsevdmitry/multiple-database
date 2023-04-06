import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), DatabasesModule],
})
export class AppModule {}
