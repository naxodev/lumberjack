import { LumberjackDriverConfig } from '@naxodev/lumberjack';

export type SpyDriverConfig = Omit<LumberjackDriverConfig, 'identifier'> &
  Partial<Pick<LumberjackDriverConfig, 'identifier'>>;
