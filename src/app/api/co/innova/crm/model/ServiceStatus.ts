import * as models from './models';
import {DataForm} from '../configuration'

export interface ServiceStatus  extends DataForm {
    /**
     * Display name of Service Status.
     */
    displayName?: string;

    /**
     * Unique identifier representing a Service Status.
     */
    serviceStatusId?: string;

}
