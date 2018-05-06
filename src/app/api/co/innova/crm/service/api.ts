export * from './ConfigurationApi';
import { ConfigurationApiService }  from './ConfigurationApi';
export * from './ServicesApi';
import { ServicesApiService }  from './ServicesApi';
export * from './UserApi';
import { UserApiService }  from './UserApi';
export const APIS = [ ConfigurationApiService, ServicesApiService, UserApiService, ];
