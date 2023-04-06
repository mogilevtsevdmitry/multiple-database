import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { asyncOptions } from './typeorm.factory';

@Module({
    imports: [TypeOrmModule.forRootAsync(asyncOptions())],
    exports: [TypeOrmModule],
})
export class TypeormModule {}
