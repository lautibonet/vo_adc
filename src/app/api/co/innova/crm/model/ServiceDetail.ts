import * as models from './models';
import {DataForm} from '../configuration'

export interface ServiceDetail  extends DataForm {
    /**
     * value indicating when a service is subscribed to automatic debit.
     */
    automaticDebit?: boolean;

    /**
     * Service Type Identifier.
     */
    billinAddress?: string;

    eInvoicing?: boolean;

    /**
     * value indicating when an electronic/digital invoice needs to be sent
     */
    einvoicing?: boolean;

    /**
     * value indicating when a paper invoice needs to be sent
     */
    paperBasedInvoicing?: boolean;

    /**
     * Unique identifier representing a Service the Company is providing to a Customer.
     */
    serviceId?: string;

    /**
     * Display name of service.
     */
    serviceLocation?: string;

}
