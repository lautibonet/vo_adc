import * as models from './models';
import {DataForm} from '../configuration'

export interface Chart  extends DataForm {
    labels?: Array<string>;

    /**
     * Chart name
     */
    name?: string;

    series?: Array<models.ChartSerie>;

    /**
     * Chart type
     */
    type?: string;

}
