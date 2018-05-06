import * as models from './models';
import {DataForm} from '../configuration'

export interface ServiceBalanceItem  extends DataForm {
    /**
     * Formatted string of balance in local currency.
     */
    amount?: string;

    /**
     * balance to be paid.
     */
    balance?: number;

    /**
     * bill status
     */
    billStatus?: string;

    /**
     * bill type
     */
    billType?: string;

    /**
     * bill concept
     */
    concept?: string;

    /**
     * [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.
     */
    currencyCode?: string;

    /**
     * Due date.
     */
    dueDate?: string;

    /**
     * Unique identifier of the item
     */
    itemId?: string;

    /**
     * message to display below the item.
     */
    message?: string;

    /**
     * indicates if bill is payable or not
     */
    payable?: boolean;

}
