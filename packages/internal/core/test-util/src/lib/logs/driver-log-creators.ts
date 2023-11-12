import { LumberjackDriverLog, LumberjackLevel, LumberjackLogLevel, LumberjackLogPayload } from '@naxodev/lumberjack';

export const createDriverLog = <TPayload extends LumberjackLogPayload | void = void>(
  getUnixEpochTicks: () => number,
  formattedLog: string,
  level: LumberjackLogLevel,
  message = '',
  scope = 'Test',
  payload?: TPayload
): LumberjackDriverLog<TPayload> => ({
  formattedLog,
  log: {
    scope,
    createdAt: getUnixEpochTicks(),
    level,
    message,
    payload,
  },
});

export const createCriticalDriverLog = <TPayload extends LumberjackLogPayload | void = void>(
  getUnixEpochTicks: () => number,
  formattedLog: string,
  message?: string,
  scope?: string,
  payload?: TPayload
): LumberjackDriverLog<TPayload> =>
  createDriverLog(getUnixEpochTicks, formattedLog, LumberjackLevel.Critical, message, scope, payload);

export const createDebugDriverLog = <TPayload extends LumberjackLogPayload | void = void>(
  getUnixEpochTicks: () => number,
  formattedLog: string,
  message?: string,
  scope?: string,
  payload?: TPayload
): LumberjackDriverLog<TPayload> =>
  createDriverLog(getUnixEpochTicks, formattedLog, LumberjackLevel.Debug, message, scope, payload);

export const createErrorDriverLog = <TPayload extends LumberjackLogPayload | void = void>(
  getUnixEpochTicks: () => number,
  formattedLog: string,
  message?: string,
  scope?: string,
  payload?: TPayload
): LumberjackDriverLog<TPayload> =>
  createDriverLog(getUnixEpochTicks, formattedLog, LumberjackLevel.Error, message, scope, payload);

export const createInfoDriverLog = <TPayload extends LumberjackLogPayload | void = void>(
  getUnixEpochTicks: () => number,
  formattedLog: string,
  message?: string,
  scope?: string,
  payload?: TPayload
): LumberjackDriverLog<TPayload> =>
  createDriverLog(getUnixEpochTicks, formattedLog, LumberjackLevel.Info, message, scope, payload);

export const createTraceDriverLog = <TPayload extends LumberjackLogPayload | void = void>(
  getUnixEpochTicks: () => number,
  formattedLog: string,
  message?: string,
  scope?: string,
  payload?: TPayload
): LumberjackDriverLog<TPayload> =>
  createDriverLog(getUnixEpochTicks, formattedLog, LumberjackLevel.Trace, message, scope, payload);

export const createWarningDriverLog = <TPayload extends LumberjackLogPayload | void = void>(
  getUnixEpochTicks: () => number,
  formattedLog: string,
  message?: string,
  scope?: string,
  payload?: TPayload
): LumberjackDriverLog<TPayload> =>
  createDriverLog(getUnixEpochTicks, formattedLog, LumberjackLevel.Warning, message, scope, payload);
