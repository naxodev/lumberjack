import { LumberjackDriverConfig } from '@naxodev/lumberjack';

export interface ErrorThrowingDriverConfig extends LumberjackDriverConfig {
  /**
   * Number of logs that will succeed before throwing an error.
   */
  readonly logsBeforeThrowing: number;
}
