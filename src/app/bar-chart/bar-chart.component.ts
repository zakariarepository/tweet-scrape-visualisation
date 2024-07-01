import {Component, OnInit} from '@angular/core';
import {ChartType} from "@rinminase/ng-charts";
import {data} from "../../../data";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit{
  Tweets=data;
  happy_score:number[];
  anger_score:number[];
  index:number;
  ngOnInit(): void {
    for (let i = 0; i < 120; i += 10) {
      const sum = this.Tweets.slice(i, i + 10).reduce((acc, val) => acc + val.sentiment.Happy, 0);
      const sum2 = this.Tweets.slice(i, i + 10).reduce((acc, val) => acc + val.sentiment.Angry, 0);
      this.happy_score.push(sum);
      this.anger_score.push(sum2);
    }
    this.barChartData[0].data=this.happy_score;
    this.barChartData[1].data=this.anger_score;
  }

  constructor() {
    this.happy_score = [];
    this.anger_score =  [];
    this.index=0;
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white'
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'white'
        }
      }]
    }
  };

  public mbarChartLabels:string[] = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  public barChartType:ChartType  = 'bar';
  public barChartLegend:boolean = true;

  public barChartColors:Array<any> = [
    {
      backgroundColor: '#56e2b1',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    {
      backgroundColor: '#f16d7b',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
  public barChartData:any[] = [
    {data: new Array(12), label: 'Happiness'},
    {data: new Array(12), label: 'Anger'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
