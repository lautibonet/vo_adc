import * as models from './models';
import {DataForm} from '../configuration'

export interface ModelError  extends DataForm {
    code?: number;

    fields?: string;

    message?: string;

}
