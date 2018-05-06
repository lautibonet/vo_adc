import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Graph } from '../../../model/graph';
import { Period, PeriodData } from '../../../model/period';

@Component({
  selector:'graphs',
  templateUrl: './graphs-component.html'
})
export class GraphsComponent implements OnInit{
  @Input() graphs:Array<Graph>;
  @Input() periods:Array<Period>;
  selectedPeriod:Period;
  selectedGraph: Graph;

  ngOnInit():void{
    this.initializeData();
  }

  initializeData():void{
    this.selectedGraph = this.graphs[0];
    this.selectDefaultPeriod();
  }

  selectDefaultPeriod(){
    this.selectedPeriod = this.periods[this.periods.length-1];
    console.log(this.selectedPeriod);

    // var periodDataArray = [];
    // for (let arrayData of this.selectedGraph.data){
    //   var periodData: PeriodData = {
    //     label: arrayData.label,
    //     unit: arrayData.unit,
    //     value: arrayData.data[this.selectedGraph.labels.length-1]
    //   }
    //
    //   periodDataArray.push(periodData);
    // }
    //
    // this.selectedPeriod = {
    //   start_date: this.selectedGraph.labels[this.selectedGraph.labels.length-1],
    //   end_date: 'Presente',
    //   data: periodDataArray
    // }

  }

  selectPeriod(index){
    this.selectedPeriod = this.periods[index];
  }

  isSelectedGraph(graph){
    return this.selectedGraph && graph.data[0].label == this.selectedGraph.data[0].label;
  }
}
