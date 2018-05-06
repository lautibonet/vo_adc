import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as api from './co/innova/crm/index';
/*import {KeycloakModule} from '../shared/keycloak/keycloak.module';
import {KeycloakService} from '../shared/keycloak/index';
import {LoadingService} from '../shared/index';

*/
import {ServiceModule} from '../shared/services/service.module';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, ServiceModule, /*KeycloakModule, ServiceModule, RouterModule*/],
  providers:[api.ConfigurationApiService, api.ServicesApiService, api.UserApiService ]
})
export class ApiModule {

}
