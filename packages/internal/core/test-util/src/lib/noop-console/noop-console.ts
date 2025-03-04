/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LumberjackConsole } from '@naxodev/lumberjack/console-driver';

/**
 * No-op console logger.
 *
 * Every method is a no-op.
 */
export class NoopConsole implements LumberjackConsole {
  debug(...data: any[]): void;
  debug(message?: any, ...optionalParams: any[]): void;
  debug(_message?: any, ..._optionalParams: any[]) {
    // intentionally a no-op
  }

  error(...data: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
  error(_message?: any, ..._optionalParams: any[]) {
    // intentionally a no-op
  }

  info(...data: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  info(_message?: any, ..._optionalParams: any[]) {
    // intentionally a no-op
  }

  trace(...data: any[]): void;
  trace(message?: any, ...optionalParams: any[]): void;
  trace(_message?: any, ..._optionalParams: any[]) {
    // intentionally a no-op
  }

  warn(...data: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  warn(_message?: any, ..._optionalParams: any[]) {
    // intentionally a no-op
  }
}
