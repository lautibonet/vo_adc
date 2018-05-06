import * as models from './models';
import {DataForm} from '../configuration'

export interface ServiceType  extends DataForm {
    /**
     * Display name of Service Type.
     */
    displayName?: string;

    /**
     * Unique identifier representing a Service Type.
     */
    serviceTypeId?: string;

}
