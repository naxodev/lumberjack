import { LumberjackConfigLevels, LumberjackLevel } from '@naxodev/lumberjack';

export const defaultProductionLevels: LumberjackConfigLevels = [
  LumberjackLevel.Critical,
  LumberjackLevel.Error,
  LumberjackLevel.Info,
  LumberjackLevel.Warning,
];
