import {Component, OnInit} from '@angular/core';
import {data} from "../../../data";
import {Tweet} from "../models/tweet";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{
  private max_value: number;
  happy_count = 0;
  angry_count = 0;
  surprise_count = 0;
  sad_count = 0;
  fear_count = 0;
  Tweets=data;

    ngOnInit(): void {
      this.Tweets.forEach(tweet => {
        this.max_value= Math.max(...[tweet.sentiment.Happy,
          tweet.sentiment.Angry,tweet.sentiment.Surprise,
          tweet.sentiment.Sad,tweet.sentiment.Fear]);
        if (tweet.sentiment.Happy == this.max_value ) {
          this.happy_count++;
        }if (tweet.sentiment.Angry == this.max_value ) {
          this.angry_count++;
        }else if (tweet.sentiment.Surprise == this.max_value ) {
          this.surprise_count++;
        }else if (tweet.sentiment.Sad == this.max_value ) {
          this.sad_count++;
        }else if (tweet.sentiment.Fear == this.max_value ) {
          this.fear_count++;
        }
      });
      console.log(this.happy_count)
      this.chartData[0] = this.happy_count;
      this.chartData[1] = this.angry_count;
      this.chartData[2] = this.surprise_count;
      this.chartData[3] = this.sad_count;
      this.chartData[4] = this.fear_count;
    }
  // private headerValue: string | null;
  // ngOnInit(): void {
  //   this.http.get('https://tweetsentiments.azurewebsites.net/api/HttpTrigger1?query_keyword=bike', { observe: 'response' })
  //     .subscribe((response: HttpResponse<any>) => {
  //       this.Tweets=response.body;
  //       this.headerValue = response.headers.get('Sentiment-Scores');
  //       console.log(this.headerValue);
  //     });
  // }


  constructor(private http:HttpClient) {
    this.max_value =0;
  }


  chartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white'
      }
    }
  };




  chartLabels = ["Happy","Angry","Surprise","Sad","Fear"];
  chartData = [1,2,3,4,5];
  chartColors = [{
    backgroundColor: ['#56e2b1','#f16d7b','#71c1e6','#a47bb3','#f9cf59'],
    borderColor: ['rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0)']
  }];
  chartLegend = true;
  chartPlugins = [];
}
