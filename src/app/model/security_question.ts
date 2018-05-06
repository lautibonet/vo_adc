export class SecurityQuestion{
  title:string;
  type:string;
  options:Array<Option>;
  answer:any;
}

export class Option{
  id:number;
  value:string;
}
