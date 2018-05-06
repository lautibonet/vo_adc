import * as models from './models';
import {DataForm} from '../configuration'

export interface ServiceBalance  extends DataForm {
    /**
     * Formatted string of balance in local currency.
     */
    amount?: string;

    /**
     * [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.
     */
    currencyCode?: string;

    /**
     * Number of overdue bills in the ServiceBalance
     */
    overdueBills?: number;

    /**
     * ID representing a Service the Company is providing to a Customer.
     */
    serviceId?: string;

}
