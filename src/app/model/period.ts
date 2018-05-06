export class Period{
  concept:string;
  start_date:Date;
  end_date:Date;
  data:PeriodData[];

  constructor() {
    this.data = [];
  }
}

export class PeriodData{
  label:string;
  unit:string;
  value:number;
}
