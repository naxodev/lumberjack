import { LumberjackDriverConfig } from '@naxodev/lumberjack';

export type ObjectDriverConfig = Omit<LumberjackDriverConfig, 'identifier'> &
  Partial<Pick<LumberjackDriverConfig, 'identifier'>>;
