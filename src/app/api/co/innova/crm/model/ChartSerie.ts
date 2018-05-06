import * as models from './models';
import {DataForm} from '../configuration'

export interface ChartSerie  extends DataForm {
    data?: Array<number>;

    /**
     * Serie label
     */
    label?: string;

    /**
     * Serie unit
     */
    unit?: string;

}
