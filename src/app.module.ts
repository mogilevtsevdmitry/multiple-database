import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { ConfigModule } from '@nestjs/config';
import { ControllersModule } from './controllers/controllers.module';
import { ServicesModule } from './services/services.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), DatabasesModule, ControllersModule, ServicesModule],
})
export class AppModule {}
