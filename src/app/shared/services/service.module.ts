import { NgModule, ModuleWithProviders, ErrorHandler,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {LoadingService} from './LoadingService'
import {ServiceLocator} from './ServiceLocator'
//import { ApiModule } from '../../api/api.module';
//import {KeycloakService} from '../keycloak/index';
//import {KeycloakModule} from '../keycloak/keycloak.module';
//import * as services from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [LoadingService,ServiceLocator]
})
export class ServiceModule {

  constructor( @Optional() @SkipSelf() parentModule: ServiceModule) {
    if (parentModule) {
      throw new Error('ServiceModuleModule is already loaded. ');
    }

    console.log('Load  ServiceModule');
  }

}
