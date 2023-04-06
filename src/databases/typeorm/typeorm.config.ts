import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const options = async (config: ConfigService): Promise<TypeOrmModuleOptions> => {
    const url = await config.get('DB_URL');
    const isProd = await config.get('IS_PROD');
    const logging = isProd ? isProd === 'false' : true;

    if (!url) {
        throw new Error('Проверьте свой .env на наличие в нем перменной DB_URL для подключения к БД');
    }

    return {
        url,
        type: 'postgres',
        schema: 'public',
        entities: ['dist/**/*.entity.{ts,js}'],
        logging,
    };
};
