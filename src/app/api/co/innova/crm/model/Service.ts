import * as models from './models';
import {DataForm} from '../configuration'

export interface Service  extends DataForm {
    /**
     * Contains additional information in the form of a key-value map.
     */
    additionalInformation?: any;

    /**
     * Indicates if automatic debit is active to the service.
     */
    automaticDebit?: boolean;

    /**
     * billing address.
     */
    billingAddress?: string;

    /**
     * Indicates if digital invoice subscription is active to the service.
     */
    digitalInvoice?: boolean;

    /**
     * Display name of service.
     */
    displayName?: string;

    /**
     * service_id without special characters that can't be used in urls.
     */
    id?: string;

    /**
     * Unique identifier representing a Service the Company is providing to a Customer.
     */
    identifier?: string;

    /**
     * Unique identifier representing a Service Owner.
     */
    ownerId?: string;

    /**
     * Full Name of the Service Owner.
     */
    ownerName?: string;

    /**
     * Service Status.
     */
    serviceStatus?: string;

    /**
     * Service Type.
     */
    serviceType?: string;

    /**
     * List of full names the service is shared with.
     */
    sharedWith?: Array<string>;

    /**
     * Indicates if social rate is applied to the service.
     */
    socialRate?: boolean;

}
