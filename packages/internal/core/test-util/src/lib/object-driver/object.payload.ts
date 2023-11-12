import { LumberjackLogPayload } from '@naxodev/lumberjack';

export interface ObjectPayload extends LumberjackLogPayload {
  readonly isWorking: boolean;
}
