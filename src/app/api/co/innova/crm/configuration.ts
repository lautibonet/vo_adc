export class Configuration {
    apiKey: string;
    username: string;
    password: string;
    accessToken: string | (() => string);
}

export interface DataForm {

  fieldsForm?:Map<string,any>;

}