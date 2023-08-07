import { ModuleWithProviders, NgModule } from '@angular/core';

import { ObjectDriverConfig, objectDriverIdentifier } from '@internal/core/test-util';
import { lumberjackLogDriverConfigToken } from '@lumberjackjs/angular';
import { LumberjackLogDriverConfig } from '@lumberjackjs/core';

import { objectDriverConfigToken } from './object-driver-config.token';
import { ObjectDriverRootModule } from './object-driver-root.module';

/**
 * Service module for `ObjectDriver`.
 *
 * Use `ObjectDriverModule.forRoot` to import.
 */
@NgModule()
export class ObjectDriverModule {
  static forRoot(config: Partial<ObjectDriverConfig> = {}): ModuleWithProviders<ObjectDriverRootModule> {
    return {
      ngModule: ObjectDriverRootModule,
      providers: [
        {
          provide: objectDriverConfigToken,
          deps: [lumberjackLogDriverConfigToken],
          useFactory: (logDriverConfig: LumberjackLogDriverConfig): ObjectDriverConfig => ({
            ...logDriverConfig,
            identifier: objectDriverIdentifier,
            ...config,
          }),
        },
      ],
    };
  }

  constructor() {
    throw new Error('Do not import ObjectDriverModule directly. Use ObjectDriverModule.forRoot.');
  }
}
