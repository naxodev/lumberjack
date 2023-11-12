import { LumberjackDriverConfig } from '@naxodev/lumberjack';

import { ErrorThrowingDriverConfig } from './error-throwing-driver.config';

export type ErrorThrowingDriverOptions = Omit<ErrorThrowingDriverConfig, keyof LumberjackDriverConfig>;
