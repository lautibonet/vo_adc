import * as models from './models';
import {DataForm} from '../configuration'

export interface ServiceCategory  extends DataForm {
    /**
     * Display name of Service Category.
     */
    displayName?: string;

    /**
     * Unique identifier representing a Service Category.
     */
    serviceCategoryId?: string;

}
