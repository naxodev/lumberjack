import { LumberjackDriver, LumberjackLogPayload } from '@naxodev/lumberjack';

export type SpyDriver<TPayload extends LumberjackLogPayload | void = void> = LumberjackDriver<TPayload> &
  jest.Mocked<LumberjackDriver<TPayload>> & { reset: () => void };
