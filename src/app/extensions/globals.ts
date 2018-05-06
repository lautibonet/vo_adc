import {Injectable} from '@angular/core';

@Injectable()
export class Globals {
  EMAIL_REGEX:RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  PASSWORD_REGEX:RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
}
