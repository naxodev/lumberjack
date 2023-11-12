import { LumberjackDriverConfig } from '@naxodev/lumberjack';

export type NoopDriverConfig = Omit<LumberjackDriverConfig, 'identifier'> &
  Partial<Pick<LumberjackDriverConfig, 'identifier'>>;
