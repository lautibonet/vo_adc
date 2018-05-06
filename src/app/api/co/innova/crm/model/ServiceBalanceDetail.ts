import * as models from './models';
import {DataForm} from '../configuration'

export interface ServiceBalanceDetail  extends DataForm {
    balanceItems?: Array<models.ServiceBalanceItem>;

    /**
     * Unique identifier representing a Service the Company is providing to a Customer.
     */
    serviceId?: string;

}
