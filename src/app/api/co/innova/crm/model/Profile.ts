import * as models from './models';
import {DataForm} from '../configuration'

export interface Profile  extends DataForm {
    /**
     * Email address of the Uber user
     */
    email?: string;

    /**
     * First name of the Uber user.
     */
    firstName?: string;

    /**
     * Last name of the Uber user.
     */
    lastName?: string;

    /**
     * Image URL of the Uber user.
     */
    picture?: string;

    /**
     * Promo code of the Uber user.
     */
    promoCode?: string;

}
