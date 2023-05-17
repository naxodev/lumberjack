import { TestBed } from '@angular/core/testing';

import { createDriverLog } from '@internal/core/test-util';
import { lumberjackLogDriverToken, LumberjackModule } from '@ngworker/lumberjack';
import {
  LumberjackLevel,
  LumberjackLogDriver,
  LumberjackLogDriverLog,
  LumberjackLogLevel,
} from '@webworker/lumberjack';

import { ObjectDriverModule } from './object-driver.module';
import { ObjectDriver } from './object.driver';
import { ObjectPayload } from './object.payload';
import { ObjectService } from './object.service';

describe(ObjectDriver.name, () => {
  let objectDriver: LumberjackLogDriver<ObjectPayload>;
  let objectService: ObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LumberjackModule.forRoot(), ObjectDriverModule.forRoot()],
    });

    [objectDriver] = TestBed.inject(lumberjackLogDriverToken) as unknown as LumberjackLogDriver<ObjectPayload>[];
    objectService = TestBed.inject(ObjectService);
    jest.spyOn(objectService, 'log');
  });

  describe.each([
    [LumberjackLevel.Critical, (driver) => driver.logCritical, { isWorking: true }],
    [LumberjackLevel.Debug, (driver) => driver.logDebug, { isWorking: false }],
    [LumberjackLevel.Error, (driver) => driver.logError, undefined],
    [LumberjackLevel.Info, (driver) => driver.logInfo, { isWorking: true }],
    [LumberjackLevel.Trace, (driver) => driver.logTrace, { isWorking: false }],
    [LumberjackLevel.Warning, (driver) => driver.logWarning, undefined],
  ] as ReadonlyArray<[LumberjackLogLevel, (driver: LumberjackLogDriver<ObjectPayload>) => (driverLog: LumberjackLogDriverLog<ObjectPayload>) => void, ObjectPayload | undefined]>)(
    `delegates to ${ObjectService.name} when using the %s log level`,
    (logLevel, logMethod, expectedPayload) => {
      it(`forwards the log payload to the ${ObjectService.prototype.log.name} method`, () => {
        const driverLog = createDriverLog<ObjectPayload>(logLevel, logLevel, '', 'ObjectDriverTest', expectedPayload);

        logMethod(objectDriver).call(objectDriver, driverLog);

        expect(objectService.log).toHaveBeenCalledWith(expectedPayload);
      });
    }
  );
});
