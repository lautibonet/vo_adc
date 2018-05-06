import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Graph, GraphData } from '../../../model/graph';
import { Period, PeriodData } from '../../../model/period';

@Component({
  selector:'graph-directive',
  templateUrl:'./graph-directive.html'
})
export class GraphDirective implements OnInit{
  @Input() graph:Graph;
  data:number[];
  chartLabels:string[];
  chartType:string;
  chartData:GraphData[];
  lineChartColors:Array<any> = [ ];
  @Input() selectedPeriod:Period;
  @Output() onChartClick = new EventEmitter<number>();
  // @Output() selectedPeriodChange = new EventEmitter<Period>();

  // chartLegend:boolean = true;
  chartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
        display: false
    },
    barValueSpacing: 10,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        display:false,
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
            display: false
        }
      }],
      xAxes: [{
        display:false,
        ticks: {
          // autoSkip: false,
          display: true,
          maxRotation: 0,
          minRotation: 0
        },
        gridLines: {
            display: false
        }
      }]
    },
    elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
  };

  ngOnInit(): void {
      this.initializeData();
  }

  public isDataSet(){
    return this.chartType === 'bar' || this.chartType === 'radar' || this.chartType === 'line';
  }

  initializeData(){
    this.chartType = this.graph.type;
    this.chartData = this.graph.data;
    this.chartLabels = this.graph.labels;

    for(let i in this.chartData){
      var a = this.COLORS[i];

      this.lineChartColors.push(a);
    }
  }

  graphClick(e): void{
    if(e.active.length == 0)
      return;

    this.onChartClick.emit(e.active[0]._index);
    // for(let dataArray of this.chartData){
    //   this.selectedPeriod = {
    //     start_date: this.chartLabels[e.active[0]._index],
    //     end_date: (this.chartLabels[e.active[0]._index+1] !== undefined)? this.chartLabels[e.active[0]._index+1] : 'Presente',
    //     data: []
    //   }
    //
    //   for (let arrayData of this.chartData){
    //     var periodData: PeriodData = {
    //       label: arrayData.label,
    //       unit: arrayData.unit,
    //       value: arrayData.data[e.active[0]._index]
    //     }
    //
    //     this.selectedPeriod.data.push(periodData);
    //   }
    //
    //   //Se emite el cambio de periodo
    //   this.selectedPeriodChange.emit(this.selectedPeriod);
    //   // console.log(this.selectedPeriod);
    // }
  }

  COLORS: any[] = [
    { //verde
      fill: true,
      backgroundColor: 'rgba(126, 211, 33, 0.1)',
      borderColor: 'rgba(126, 211, 33, 1)',
      pointRadius: 6,
      pointBorderColor: '#fff',
      pointBorderWidth: 3,
      pointBackgroundColor: 'rgba(126, 211, 33, 1)',
      pointHoverBorderColor: 'rgba(118, 199, 31, 1)',
      pointHoverRadius: 8,
      borderWidth: 2
    },
    { //azul
      fill: true,
      backgroundColor: 'rgba(33, 150, 243, 0.1)',
      borderColor: 'rgba(33, 150, 243, 1)',
      pointRadius: 6,
      pointBorderColor: '#fff',
      pointBorderWidth: 3,
      pointBackgroundColor: 'rgba(33, 150, 243, 1)',
      pointHoverBorderColor: 'rgba(25, 118, 210, 1)',
      pointHoverRadius: 8,
      borderWidth: 2
    },
    { //rojo
      fill: true,
      backgroundColor: 'rgba(244, 67, 54, 0.1)',
      borderColor: 'rgba(244, 67, 54, 1)',
      pointRadius: 6,
      pointBorderColor: '#fff',
      pointBorderWidth: 3,
      pointBackgroundColor: 'rgba(244, 67, 54, 1)',
      pointHoverBorderColor: 'rgba(211, 47, 47, 1)',
      pointHoverRadius: 8,
      borderWidth: 2
    }
  ]
}
