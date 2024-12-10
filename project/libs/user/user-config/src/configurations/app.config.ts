import { ConfigType, registerAs } from '@nestjs/config';
import { plainToClass } from 'class-transformer';

import { AppConfiguration, type Environment } from './app/app.env';

const DEFAULT_PORT = 3000;

export interface ApplicationConfig {
  environment: string;
  port: number;
}

async function getAppConfig(): Promise<AppConfiguration> {
  const config = plainToClass(AppConfiguration, {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DEFAULT_PORT}`, 10),
  });

  await config.validate();

  return config;
}

export default registerAs('application', async (): Promise<ConfigType<typeof getAppConfig>> => {
    return getAppConfig();
  });