import * as models from './models';
import {DataForm} from '../configuration'

export interface Charts  extends DataForm {
    charts?: Array<models.Chart>;

    /**
     * Service unique identifier
     */
    serviceId?: string;

}
