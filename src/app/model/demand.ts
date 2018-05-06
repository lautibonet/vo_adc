export class Demand{
  id:number;
  user_id:number;
  type:string;
  status:string;
  created:string;
  updated:string;
  target:string;
  author:string;
  channel:string;
  statusHistory:Array<DemandStatus>;
}

export class DemandStatus{
  name:string;
  updated:string;
  commentary:string;
}
