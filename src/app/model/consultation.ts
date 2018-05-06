export class Consultation{
  id:number;
  user_id:number;
  type:string;
  status:string;
  created:string;
  updated:string;
  target:string;
  author:string;
  channel:string;
  consultationHistory:Array<ConstultationActivity>;
}

export class ConstultationActivity{
  title:string;
  type_code:number;
  updated:string;
  content:string;
}
