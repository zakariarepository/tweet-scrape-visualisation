import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from 'data';

@Component({
  selector: 'app-tweets-section',
  templateUrl: './tweets-section.component.html',
  styleUrls: ['./tweets-section.component.css']
})
export class TweetsSectionComponent implements OnInit {
  Tweets=data;
  ngOnInit(): void {
    // this.http.get('https://tweetsentiments.azurewebsites.net/api/HttpTrigger1?query_keyword=bike', { observe: 'response' })
    // .subscribe((response: HttpResponse<any>) => {
    //   this.Tweets=response.body;
    //    const headerValue = response.headers.get('Sentiment-Scores');
    // });

  }
  sorted = -1;
  sort_likes(){
    if (this.sorted == -1) {
      this.Tweets = this.Tweets.sort((a, b) => b.likes - a.likes);
      this.sorted=1;
    }else{
      this.Tweets = this.Tweets.sort((a, b) => a.likes - b.likes);
      this.sorted=-1;
    }
  }
  getTweetColor(threshold: number) {
    return 3 > threshold ? '#f44336' : '#4caf50';
  }
  constructor(
    private http:HttpClient
  ){}
}
