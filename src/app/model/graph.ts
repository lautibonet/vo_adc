export class Graph{
  type:string;
  labels:string[]; //periods
  data:GraphData[];
}

export class GraphData{
  data: number[];
  unit: string;
  label: string;
}
