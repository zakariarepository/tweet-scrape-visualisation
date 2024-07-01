import {Component, ElementRef, OnInit} from '@angular/core';
import {ChartType} from "@rinminase/ng-charts";
import {data} from "../../../data";

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.css']
})
export class TimelineChartComponent implements OnInit{

  Tweets=data;
  happy_score:number[];
  anger_score:number[];
  sad_score:number[];
  public chartType: ChartType = 'line';
  public chartData: any[]=[{
    data: new Array(5),
    label: 'Happy',
    fill: false
  },
    {
      data: new Array(5),
      label: 'Anger',
      fill: false
    },
    {
      data: new Array(5),
      label: 'Sad',
      fill: false
    }];
  public chartLabels: string[]=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
  public chartColors: any[]=[{
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(0, 0, 0, 1)'
  }];
  public chartOptions: any={
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
          fontColor: 'white',
          max : 24
        }
      }]
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [{
        type: 'box',
        id: 'a-box-1',
        yScaleID: 'y-axis-0',
        yMin: 0,
        yMax: 1,
        backgroundColor: '#4cf03b'
      }, {
        type: 'box',
        id: 'a-box-2',
        yScaleID: 'y-axis-0',
        yMin: 1,
        yMax: 2.7,
        backgroundColor: '#fefe32'
      }, {
        type: 'box',
        id: 'a-box-3',
        yScaleID: 'y-axis-0',
        yMin: 2.7,
        yMax: 5,
        backgroundColor: '#fe3232'
      }]
    },

  };

  constructor() {
    this.happy_score = [];
    this.anger_score =  [];
    this.sad_score =  [];
  }

  ngOnInit() {
    for (let i = 0; i < 70; i += 10) {
      const sum = this.Tweets.slice(i, i + 10).reduce((acc, val) => acc + val.sentiment.Happy, 0);
      const sum2 = this.Tweets.slice(i, i + 10).reduce((acc, val) => acc + val.sentiment.Angry, 0);
      const sum3 = this.Tweets.slice(i, i + 10).reduce((acc, val) => acc + val.sentiment.Sad, 0);
      this.happy_score.push(24 * sum / 1.6);
      this.anger_score.push(24 * sum2 / 1.6);
      this.sad_score.push(24 * sum3 / 3.2);
    }
    this.chartData[0].data=this.happy_score;
    this.chartData[1].data=this.anger_score;
    this.chartData[2].data=this.sad_score;
  }
}
