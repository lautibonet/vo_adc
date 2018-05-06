
export class Service{
  id:string;
  type:string;
  social_rate:boolean;
  identifier:string;
  automatic_debit:boolean;
  digital_invoice:boolean;
  address:string;
  billing_address:string;
  debt:number;
  status:number;
  owner_name:string;
  owner_id:number;
  delegated_since:string;
  shared_with:Array<string>;
  aditional_information:any;
  selected:boolean;
}
